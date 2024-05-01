
import {addFolders, todos} from "./main.js";
import { getUserTodos, getUserConnection, getFolders } from "./requests/requests.js";

/**
 * 
 * @param {Array} folders 
 * @param {string} folder_name_value 
 */

export const doTheFolderAlreadyExist = (folders, folder_name_value) => {
    const doFolderExist = folders.filter(category => category.folderName.toLowerCase() === folder_name_value)
    if (doFolderExist == false) {
        addFolders(folders,  folder_name_value)
    }
}

/**
 * 
 * @param {String[]} todos 
 * @param {String[]} folders 
 */
export const  showFolders  = async (todos , folders) => {
    const boardContainer = document.querySelector('.boardContainer')
    const pFolder = document.querySelectorAll('.folders')
    const asideElement = document.getElementById('asideElement')

    const userConnection = await getUserConnection('../App/Models/getUserConnection.php');

    if (userConnection === true) {
        const results = await getUserTodos('../App/Models/getUserTodos.php');
        const folders = await getFolders('../App/Models/getFolders.php');
        console.log( results);
        console.log(folders);
        
      
    } else {
        boardContainer.innerHTML = ''
        for (const key in folders) {
            boardContainer.innerHTML += 
            `
                <div class="folder-style">
                    <p class="folders">${folders[key].folderName}</p>
                </div>
            `;
        }
    }


    pFolder.forEach(x => {
       x.addEventListener('click', () => {
        asideElement.classList.toggle('asideTransition')
       })
    });
   

    const  foldersP = document.querySelectorAll('.folders')
    const h3 = document.querySelector('.h3')
    h3.innerText = 'All my todos' 
   
    foldersP.forEach(categoryName => {
        categoryName.addEventListener('click', function () {
            getCategoryTodos(todos, categoryName.innerHTML, results);
        })
    });
}


/**
 * 
 * @param {String[]} todos 
 * @param {Array} todosOfTheSelectedCateory 
 * @param {Array} results 
 */
export const showNotesOfFolderSelected  = (todos,todosOfTheSelectedCateory, results) => {

    const containerTodo = document.querySelector('.containerTodo')

    if (results.length > 0) {
        containerTodo.innerHTML = '';
        for (const key of results) {
            containerTodo.innerHTML += 
            `
             <div class="div"> 
                        <div class="div-todo-added">    
                            <ul class="ul">
                                <p id="pName" class="pNameClass"> ${key.todoName} 
                                </p>
                            </ul>
                        </div>
                        <div class="bottomElements">
                            <p class="h4">  ${key.folderName} </p>
                            <button type="button"> ${key.todoStatus}</button>
                        </div>
                </div>
            `;
       
        } 
    } else {
        containerTodo.innerHTML = ''
        for (const key of todosOfTheSelectedCateory) {
            containerTodo.innerHTML += 
            `
             <div class="div"> 
                        <div class="div-todo-added">    
                            <ul class="ul">
                                <p id="pName" class="pNameClass"> ${key.name} 
                                </p>
                            </ul>
                        </div>
                        <div class="bottomElements">
                            <p class="h4">  ${key.folderName} </p>
                            <button type="button"> ${key.todoStatus}</button>
                        </div>
                </div>
            `;
       
        } 
    }

    
    
   
    const todosDiv = document.querySelectorAll('.div')

    todosDiv.forEach(x => {
          x.addEventListener('click', () => {
             const text = x.childNodes[1].childNodes[1].innerText;
              showpopUpTodoInfos(todos, text)
          })
  });


}

/**
 * 
 * @param {String[]} todos 
 * @param {String} categoryName 
 * @param {Array} results 
 */
const getCategoryTodos = (todos, categoryName, results) => {
    const todosOfTheSelectedCateory = todos.filter(item => item.folderName == categoryName)
    showNotesOfFolderSelected(todos,todosOfTheSelectedCateory, results);
}


/**
 * 
 * @param {Array} todos 
 *  @param {String[]} todos 
 * @returns 
 */
export const verifyPopUpinfo =  (todos, text) => {

    return new Promise((resolve, reject) => {
        const result = todos.filter(item =>item.name === text)
        if (result == false) {
            reject()
        }
         else {
            resolve(result)
         }
    })
} 


/**
 * 
 * @param {Array} todos 
 * @param {String} text 
 */
export const showpopUpTodoInfos =  async (todos, text) => {
    const popTodoDivInfos = document.querySelector('.popTodoInfos')
    const h3PopUp = document.querySelector('.h3PopUp')
    const description = document.querySelector('.description')
    const SubstackContainer = document.querySelector('.SubstackContainer')
    popTodoDivInfos.classList.toggle('pupTodoInfosVisible')

    // const request = await verifyPopUpinfo(todos, text)

    const userConnection = await getUserConnection('../App/Models/getUserConnection.php');

    if (userConnection === false) {
        for (const req of request) {
            h3PopUp.innerText = req.name
            description.innerText = req.description
            SubstackContainer.innerHTML =
            `
                <div class="Substack">
                <label> ${req.substack} <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" placeholder="value" value=""> </label>
                    <p> </p>
                    
                </div>
    
            `
        }
    } else {
        const results = await getUserTodos('../App/Models/getUserTodos.php');

        for (const value of results) {
            h3PopUp.innerText = value.todoName
            description.innerText = value.todoDescription
            popTodoDivInfos.innerHTML =
            `
                    <div class="infoTop">
                    <div class="divH3">
                        <h3 class="h3PopUp">All my todos</h3></div>
                    <div>
                        <span>&#9776;</span>
                    </div>
                </div>

                <div class="spanContainer">
                    <p class="description">description</p>
                </div>
                <div class="SubstackContainer">
                
                </div>
    
            `
        }

        console.log(results);


    }



    
}

/**
 * 
 * @param {String} title 
 * @param {String} description 
 * @param {String} folderName 
 * @param {String} substack 
 * @param {String[]} todos 
 * @returns 
 */

export const VerifyAddTodoInformation = (title,description,folderName,substack, todos) =>  {

    return new Promise((resolve, reject) => {
        if ( title.length > 0) {
            if (description.length > 0) {
                if (folderName.length > 0) {
                   if (substack.length > 0) {
                        const result = todos.filter((item) => item.name === title)
                        console.log(result);
                        if (result == false) {
                          resolve(result);

                        } else {
                            reject('Title Already exists')
                        }
                   }
                } else {
                    reject('foldername est vide')
                }
            } else {
                reject('description  est vide')
            }
        }  else {
            reject('title est vide')
        }
    })

}


export const showTodos = async () => {
    const containerTodo = document.querySelector('.containerTodo');
    const userConnection = await getUserConnection('../App/Models/getUserConnection.php')

    if (userConnection === true) {
        const results = await getUserTodos('../App/Models/getUserTodos.php');
        if (results.length > 0) {
            containerTodo.innerHTML = '';
            for (const result of results) {
                containerTodo.innerHTML += `
                <div class="div"> 
                        <div class="div-todo-added">    
                            <ul class="ul">
                                <p id="pName" class="pNameClass"> ${result.todoName} 
                                </p>
                            </ul>
                        </div>
                        <div class="bottomElements">
                        <p class="h4">  ${result.folderName} </p>
                            <button type="button"> ${result.todoStatuts}</button>
                        </div>
                </div>
                      `;
    
                      const todosDiv = document.querySelectorAll('.div')
    
                      todosDiv.forEach(x => {
                            x.addEventListener('click', () => {
                               const text = x.childNodes[1].childNodes[1].innerText;
                                showpopUpTodoInfos(todos, text)
                            })
                    });
    
            }
            
        } 
    } else {
        if (todos.length > 0) {
        containerTodo.innerHTML = '';
            for (const key of todos) {
                containerTodo.innerHTML += `
                <div class="div"> 
                        <div class="div-todo-added">    
                            <ul class="ul">
                                <p id="pName" class="pNameClass"> ${key.name} 
                                </p>
                            </ul>
                        </div>
                        <div class="bottomElements">
                        <p class="h4">  ${key.folderName} </p>
                            <button type="button"> ${key.todoStatus}</button>
                        </div>
                </div>
                      `;
    
                      const todosDiv = document.querySelectorAll('.div')
    
                      todosDiv.forEach(x => {
                            x.addEventListener('click', () => {
                               const text = x.childNodes[1].childNodes[1].innerText;
                                showpopUpTodoInfos(todos, text)
                            })
                    });
    
            } ;
    
        } else {
            const divContainerTodo = document.querySelector('.containerTodo')
           
            divContainerTodo.innerHTML = "Thinks to do ? write it down !";
        }
    
    }

};











