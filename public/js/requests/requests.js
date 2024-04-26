export const getUserTodos = async function (url) {
    
    const request = await fetch(url, {method : "get", headers : {"Accept": "application/json" }})
    
    if (request.ok) {
        const result = await request.json()
        return result
    } else {
        throw new Error('Erreur serveur', {cause: request})
    }
}


export const postUserTodo = async function (url, element = {}) {

    console.log(element);

    const request = await fetch(url, 
        {
            method : "post", 
            headers : {"Content-Type": "application/json" }, 
            body : JSON.stringify(element) 
        })
    
    if (request.ok) {
        return await request.json();

    } else {
        throw new Error('Erreur serveur', {cause: request})
    }
}

export const getUserConnection = async function (url) {
    
    const request = await fetch(url, 
        {
            method : "get", 
            headers : {"Accept": "application/json" }
        })

        if (request.ok) {
            return  await request.json()

        } else {
            throw new Error('Erreur serveur', {cause: request})
        }
}

export const getFolders = async function (url) {
    
    const request = await fetch(url, 
        {
            method : "get", 
            headers : {"Accept": "application/json" }
        })

        if (request.ok) {
            return  await request.json()

        } else {
            throw new Error('Erreur serveur', {cause: request})
        }
}









    



