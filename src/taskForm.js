export default function createNewTaskForm(){
    const mainContent=document.querySelector(".mainContent")
    const formDiv=document.createElement("form")
    formDiv.classList.add("newTaskForm")

    const nameInput=document.createElement('input');
    nameInput.setAttribute('id', "nameInput")
    nameInput.setAttribute('name', "nameInput")
    const descriptionInput=document.createElement('input');
    descriptionInput.setAttribute("id", "descriptionInput")
    descriptionInput.setAttribute("name", "descriptionInput")
    const dueDateInput=document.createElement('input');
    dueDateInput.setAttribute("id", "dueDateInput")
    dueDateInput.setAttribute("name", "dueDateInput")
    const priorityInput=document.createElement('input');
    priorityInput.setAttribute("id", "priorityInput")
    priorityInput.setAttribute("name", "priorityInput")

    formDiv.appendChild(nameInput)
    formDiv.appendChild(descriptionInput)
    formDiv.appendChild(dueDateInput)
    formDiv.appendChild(priorityInput)
    console.log(formDiv)
    console.log(mainContent)
    mainContent.appendChild(formDiv)
}