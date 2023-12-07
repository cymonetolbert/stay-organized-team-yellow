"use strict"

window.onload = function () {
    const categorySelect = document.querySelector("#category")
    getCategory(categorySelect)

    const form = document.querySelector("#form")
    form.onsubmit = getInputs
}


function getCategory(element) {
    fetch(`http://127.0.0.1:8083/api/categories`)
    .then(repsone => repsone.json())
    .then(categories => populateCategories(categories, element))
}
function populateCategories(categories, element) {
    let html = `<option value="none">Please choose a category!</option>`
    for (const category of categories) {
        html += `<option value="${category.name}">${category.name}</option>`
    }
    element.innerHTML = html
}

function getInputs(event) {
    event.preventDefault()
    let typedUsername = event.target.elements.username.value
    let selectedCategory = event.target.elements.category.value
    let typedDescription = event.target.elements.description.value
    let chosenDate = event.target.elements.date.value
    console.dir(typedDescription, typedUsername, selectedCategory, chosenDate)

    //not working atm need to come back and fix
}