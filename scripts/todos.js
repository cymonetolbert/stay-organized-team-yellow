"use strict"

window.onload = function (_event) {
    const namePick = document.getElementById("name")
    namePick.onchange = showName
    
    const idPick = document.getElementById("id")
    idPick.onchange = renderIdCard

    populateUser(user, userSelect)
    
}

function add (data, info) {
    const data = currentName
    // populate with corresponding fetch data for "name"
    const info = id
    // populate with corresponding fetch information for "id"

    resultdiv= html 
    // populate dropdowns with fetches
    
}

function populateUser (user, nameElement) {
    let html = "<option>Select your name...</option>"
    for (let index = 0; index < user.length; index += 1) {
        const currentName = user[index]
        html += `<option value="${currentName}">${currentName}</option>`
    }
    nameElement.innerHTML = html
}
function showName (event) {
    const selectedName = event.target.value
    console.log(selectedName)
   
    
    let html = ""
    for (let index = 0; index < ids.length; index += 1) {
        const id = ids[index]
        if (id === selectedName) {
            html += `<option value="${id}">${id}</option>`
        }
    }
    
    const selectElement = document.getElementById("name")
    selectElement.innerHTML = html
}