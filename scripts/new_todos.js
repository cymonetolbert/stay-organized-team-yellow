"use strict"

window.onload = function () {
    const categorySelect = document.querySelector("#category")
    getCategory(categorySelect)

    const usernameSelect = document.querySelector("#username")
    getUsername(usernameSelect)

    // const form = document.querySelector("#form")
    // form.onsubmit = getInputs

    const prioritySelect = document.querySelector("#priority")
    populatePriority(prioritySelect)

}

function getUsername(element) {
    fetch(`http://127.0.0.1:8083/api/users`)
    .then(repsone => repsone.json())
    .then(users => populateUsername(users, element))
}

function populateUsername(users, element) {
    let html = `<option value="none">Please choose a username!</option>`
    for (const user of users) {
        html += `<option value="${user.id}">${user.username}</option>`
    }
    element.innerHTML = html
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


function populatePriority (priority, element) {
    let html = `<option value="none">Please choose priority level!</option>`
    for (const level of priority) {
        html += `<option value="${level.name}">${level.name}</option>`
    }
    element.innerHTML = html
}


function getInputs(event) {
    event.preventDefault()
    let formElements = event.target.elements
    console.log(formElements)

    let typedUsername = formElements.username.value
    let selectedCategory = formElements.category.value
    let typedDescription = formElements.description.value
    let chosenDate = formElements.date.value
    let selectedPriority = formElements.priority.value
    // console.log(typedDescription, typedUsername, selectedCategory, chosenDate)

    const newTodoJSON = ({
        id: 5,
        userid: typedUsername,
        category: selectedCategory,
        description: typedDescription,
        deadline: chosenDate,
        priority: selectedPriority,
        completed: "false"
    })
    return addTodo(typedUsername, newTodoJSON)
}
