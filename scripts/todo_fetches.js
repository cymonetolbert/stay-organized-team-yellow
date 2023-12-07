"use strict"

function fetch(event){
fetch('http://localhost:8083/api/users')
.then(res => res.json())
.then(data => todo(data))
.then (data => loop(incomingData))
.catch(error => console.log('ERROR'))
}
// window.onload = function (){
//     console.log("Hey hey!")
// }
function todo (data) {
    //variable defined here
    //loop
    //innerHTML here
}