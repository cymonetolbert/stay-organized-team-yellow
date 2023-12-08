"use strict"

window.onload = function (_event) {
    const namePick = document.getElementById("name")
     namePick.onchange =  fetchSpecificId(_event) 
    //TO  we are able to display all of the todos for user 1 because it is hardcoded in our "fetchSpecificId() method
    //".TO however when we make a selection in our drop down menu it down not invoke the method again.

    // const idPick = document.getElementById("id")
    // idPick.onchange = renderCard

    fetchUsernames(namePick)
    
}
// TO this is commented out becuase the idea is to take this login out of thewindow.onload function above.
// TO we want to get access to thedrop down menu and add the event listen to it. 

//TO var namePick = document.getElementById("name")
//TO console.log(namePick) // this lement is printing as null in the console. 
 //TO namePick.onchange = (_event) => {fetchSpecificId(_event)} //iscorrect but the elemnt is coming up as null

// function add (data, info) {
//     const currentName = data
//     // populate with corresponding fetch data for "name"
//     const id = info
//     // populate with corresponding fetch information for "id"

//     resultdiv= html 
//     // populate dropdowns with fetches
    
// }

function populateUser (user, nameElement) {
    let html = "<option>Select your name...</option>"
    for (let index = 0; index < user.length; index += 1) {
        const currentName = user[index]
        html += `<option value="${currentName.id}">${currentName.name}</option>`
    }
    nameElement.innerHTML = html
}

// function showName (event) {
//     const selectedName = event.target.value
//     console.log(selectedName)
   
    
//     let html = ""
//     for (let index = 0; index < ids.length; index += 1) {
//         const id = ids[index]
//         if (id === selectedName) {
//             html += `<option value="${id}">${id}</option>`
//         }
//     }
    
//     const selectElement = document.getElementById("name")
//     selectElement.innerHTML = html
// }

function renderCard (data) {
const ChooseName=_event.target
console.log(ChooseName)
let html =""
for (let index=0; index < names.length;index +=1) {
const name= names[index];
if(name.id=== ChooseName) {
    html +=`
    
    `
}
}
}