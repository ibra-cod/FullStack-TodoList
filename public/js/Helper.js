
/**
 * 
 * @param {String} message 
 * @param {String} cssTag 
 * @param {Number} timer 
 */
export const flashMessages = function (message, cssTag, timer = 2000) {
    const flashMessage = document.getElementById('flashMessage')
     flashMessage.innerHTML =
             `
                 <div class="${cssTag}"> 
                     <p> ${message}</p>
                 </div>
             `
            setTimeout(() => {
                flashMessage.style.display = 'none';
         }, timer);
         flashMessage.style.display = 'block';

}

/**
 * 
 * @param {INT} idParam 
 * @returns {INT}
 */
export const  createRandomId = (idParam) => {
    const randomNumber = Math.floor(Math.random() * 1000)
    const randomString = Math.random().toString(36).substring(2,7);
     idParam = randomNumber + randomString
     return idParam
}







