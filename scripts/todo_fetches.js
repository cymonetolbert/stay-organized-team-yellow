"use strict"

function fetchUsernames(nameElement) {
    fetch('http://localhost:8083/api/users')
        .then(res => res.json())
        .then(data => populateUser(data, nameElement))
        .catch(error => console.log(error))
}



//make another fetch for specifc UserID
function fetchSpecificId(event) {
   const userId = event.target.value
    console.log(userId)
    fetch('http://127.0.0.1:8083/api/todos/byuser/{userId}')
        .then(res => res.json())
        .then(data => renderCard(data)) //this is where rendercard(data) should be
        .catch(error => console.log(error))

}
//this function is repetative!
// // second fetch get all todos of speicifc user using userID
// function fetchSpecificUserId(event) {
//     const user = event.target.value
//     console.log(specificUserId)
//     //http://grgrg/adljhefoi/ofihweof/{STRING INTERPULATION -> USERID}
//     fetch('http://127.0.0.1:8083/api/todos/byuser/1')
//         //have .then(data => rendercard(data))
//         .then(res => res.json())
//         .then(data => specificUserId(data, nameElement))
//         .catch(error => console.log(error))
// }
// //u guys got this :D