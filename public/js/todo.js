
import {addFolders, todos} from "./main.js";
import { getUserTodos, getUserConnection, getFolders } from "./requests/requests.js";

export const doTheFolderAlreadyExist = (folders, folder_name_value) => {
    const doFolderExist = folders.filter(category => category.folderName.toLowerCase() === folder_name_value)
    if (doFolderExist == false) {
        addFolders(folders,  folder_name_value)
    }
}


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


const getCategoryTodos = (todos, categoryName, results) => {
    const todosOfTheSelectedCateory = todos.filter(item => item.folderName == categoryName)
    showNotesOfFolderSelected(todos,todosOfTheSelectedCateory, results);
}



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

export const showpopUpTodoInfos =  async (todos, text) => {
    const popTodoDivInfos = document.querySelector('.popTodoInfos')
    popTodoDivInfos.classList.toggle('pupTodoInfosVisible')
    const request = await verifyPopUpinfo(todos, text)
    const h3PopUp = document.querySelector('.h3PopUp')
    const description = document.querySelector('.description')
    const SubstackContainer = document.querySelector('.SubstackContainer')


    for (const req of request) {
        h3PopUp.innerText = req.name
        description.innerText = req.description
        SubstackContainer.innerHTML =
        `
            <div class="Substack">
            <label> <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" placeholder="value"> </label>
                <p> ${req.substack}</p>
                
            </div>

        `
    }
}

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











