import { showFolders, doTheFolderAlreadyExist, showTodos , showpopUpTodoInfos, VerifyAddTodoInformation } from "./todo.js";
import { getUserConnection, postUserTodo } from "./requests/requests.js";
import { flashMessages, createRandomId } from "./Helper.js";
// constant declaration

const addTodoId = document.getElementById('addTodoId')
const popUpClass = document.querySelector('.popUp')
const btnDashboard = document.getElementById('Dashboard')
const ContainerTodo =  document.querySelector('.popTodoInfos')
const divContainerTodo = document.querySelector('.containerTodo')

// const deleteAllTodos = document.getElementById('deleteAllTodos')

// get all the todos in the localstorage
/**
 * 
 * @param {String} key 
 * @returns {data[]}
 */
const getLocalStorageInfo = function (key) {
    const  data = JSON.parse(localStorage.getItem(key)) ?? [];
    if(localStorage) {
      return data;
    };
 };


export const todos = getLocalStorageInfo('todos');
export const folders = getLocalStorageInfo('folders');



// delete all the todo in the localstorage  
/**
 *  clear all the todos
 */
const clearAllTodo = function () {
    todos.splice(0, todos.length);
    localStorage.removeItem('todos');
    window.location.reload();
}


// save to todo takes 2 parameters and set all the todo in the local storage
/**
 * 
 * @param {string} key 
 * @param {string} value 
 */
const saveTodos = function (key,value) {
    localStorage.setItem(key,value);
    getLocalStorageInfo(key);
}

// show todos display all the todos of the user
// that are in the todos []

/**
 * 
 * @param {array} folders 
 * @param {string} folder_name_value 
 */
export const addFolders =  (folders, folder_name_value) => {
     folders.push({folderName: `${folder_name_value}`})
    saveTodos('folders', JSON.stringify(folders));
}

// the AddTodo function add and the input value
// in the constant todos[]
/**
 * 
 * @param {array[]} folders 
 * @param {array[]} todos 
 */
export const AddTodos = async (folders, todos) => {
    const title = document.getElementById('titleId').value.trim();
    const description = document.getElementById('message').value.trim()
    const folderName = document.getElementById('folderId').value.trim()
    const substack = document.getElementById('substack').value.trim()
    const todoStatus = 'TODO';
    
    const userConnection = await getUserConnection('../App/Models/getUserConnection.php')
    if (userConnection === true) {
        const data = {
            todoName : title,
            todoDescription : description,
            folderName : folderName,
            todoStatus : todoStatus,
            todoSubstack : substack
        }
    
       await postUserTodo('../App/Models/postTodo.php', data)
    } else {

        // const informationChecked = await VerifyAddTodoInformation(title, description, folderName, substack,todos)

        doTheFolderAlreadyExist(folders, folderName.toLowerCase())
        todos.unshift({name : `${title}`, folderName: `${folderName}`,description : `${description}`, todoStatus : `${todoStatus}`, substack : `${substack}` });
        saveTodos('todos', JSON.stringify(todos));

        window.location.reload();

    } 

}
  
if (addTodoId !== null) 
    addTodoId.addEventListener('click', function () {
        popUpClass.classList.toggle('pupTodoInfosVisible');
        ContainerTodo.classList.remove('pupTodoInfosVisible');
    })         
        
    const form = document.getElementById('form')
    
    if (form !== null) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
                 AddTodos(folders, todos);
         })
}
    
    // deleteAllTodos.addEventListener('click', clearAllTodo)
    
(async () => {
    const result = await getUserConnection('../App/Models/getUserConnection.php')

    console.log(result);

  if (result === false) {
        folders.length > 0 > 0 ? showFolders(todos,folders) : document.querySelector('.boardContainer').innerText = 'No folder Availaible';
        todos.length > 0 ? showTodos() : divContainerTodo.innerText = 'You have todo available add one in the LocalSorage or sign in !';

  } else {
    showTodos()
  }

   
})();



btnDashboard.addEventListener('click', () => {
    asideElement.classList.toggle('asideTransition')
})


