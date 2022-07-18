    const formDiv=document.createElement("form")


const nameDiv=document.createElement("div")
const descriptionDiv=document.createElement("div")
const DueDateDiv=document.createElement("div")
const priorityDiv=document.createElement("div")

const nameInput=document.createElement('input');
const descriptionInput=document.createElement('input');
const dueDateInput=document.createElement('input');
const priorityInput=document.createElement('select');

nameInput.setAttribute('id', "nameInput")
nameInput.setAttribute('name', "nameInput")
descriptionInput.setAttribute("id", "descriptionInput")
descriptionInput.setAttribute("name", "descriptionInput")
dueDateInput.setAttribute("type", "date")
dueDateInput.setAttribute("id", "dueDateInput")
dueDateInput.setAttribute("name", "dueDateInput")
priorityInput.setAttribute("id", "priorityInput")
priorityInput.setAttribute("name", "priorityInput")

const labelName=document.createElement("label")
const labelDescription=document.createElement("label")
const labelDueDate=document.createElement("label")
const labelPriority=document.createElement("label")

labelName.setAttribute("for","nameInput")
labelName.textContent="Task name:"
labelDescription.setAttribute("for","descriptionInput")
labelPriority.textContent="Description:"
labelDueDate.setAttribute("for","dueDateInput")
labelDueDate.textContent="Due date:"
labelPriority.setAttribute("for","priorityInput")
labelPriority.textContent="Priority:"

const optionLow=document.createElement("option")
optionLow.setAttribute("value", "low")
optionLow.textContent="Low"
const optionNormal=document.createElement("option")
optionNormal.setAttribute("value", "Normal")
optionNormal.textContent="Normal"
const optionHigh=document.createElement("option")
optionHigh.setAttribute("value", "High")
optionHigh.textContent="High"

priorityInput.appendChild(optionLow)
priorityInput.appendChild(optionNormal)
priorityInput.appendChild(optionHigh)



nameDiv.appendChild(labelName)
nameDiv.appendChild(nameInput)
descriptionDiv.appendChild(labelDescription)
descriptionDiv.appendChild(descriptionInput)
DueDateDiv.appendChild(labelDueDate)
DueDateDiv.appendChild(dueDateInput)
priorityDiv.appendChild(labelPriority)
priorityDiv.appendChild(priorityInput)

const submitTaskButton= document.createElement("button")
submitTaskButton.classList.add("submitTaskButton")
submitTaskButton.textContent="Submit"
submitTaskButton.setAttribute("type", "button")


export default function createNewTaskForm(){
    const mainContent=document.querySelector(".mainContent")
    formDiv.classList.add("newTaskForm")
    formDiv.appendChild(nameDiv)
    formDiv.append(descriptionDiv)
    formDiv.appendChild(DueDateDiv)
    formDiv.appendChild(priorityDiv)
    formDiv.appendChild(submitTaskButton)
    mainContent.appendChild(formDiv)
}

export let functionsToCreateForms={
     createNewTaskForm1:  function (){
        const mainContent=document.querySelector(".mainContent")
        formDiv.appendChild(nameDiv)
        formDiv.append(descriptionDiv)
        formDiv.appendChild(DueDateDiv)
        formDiv.appendChild(priorityDiv)
        formDiv.appendChild(submitTaskButton)
        mainContent.appendChild(formDiv)
    },

     createNewFolderForm: function(){
        const mainContent=document.querySelector(".mainContent")
        formDiv.classList.add("newTaskForm")
        formDiv.appendChild(nameDiv)
        mainContent.appendChild(formDiv)
    }
    
}



export {nameInput}
export {descriptionInput}
export {dueDateInput} 
export {priorityInput}
export {formDiv}