import { sub } from "date-fns"
import { folderStorage } from "./categories"

export default class FolderDisplay {
    constructor(name, array) {
        this.folderToDisplay = name
        this.contentDiv = document.createElement('div')
        this.tasksToDisplay = array
        this.folderTitle = document.createElement("p")
    }

    getTasks = function () {
        if(this.tasksToDisplay.length==0){
            createNoTasksDiv()
        } else {
            this.tasksToDisplay.forEach((task) => {
                this.contentDiv.classList.add("taskContainer")
                let taskDiv=document.createElement("div")
                taskDiv.classList.add(task.taskNumber)
                let priority= task.priority.toLowerCase()
                taskDiv.classList.add(priority)
                taskDiv.classList.add("taskDiv")
                let name=document.createElement("p")
                // name.setAttribute("contenteditable", true)
                let priorityDiv=document.createElement("div")
                priorityDiv.classList.add("priority"+`${priority}`)
                name.classList.add("taskName")
                let dueDate=document.createElement('p')
                dueDate.classList.add("dueDate")
                let dateCreated=document.createElement("p")
                dateCreated.classList.add("dateCreated")
                name.textContent=task["name"]
                dueDate.textContent=task["dueDate"]
                const button=document.createElement("button")
                button.classList.add("sizeButton")
                button.setAttribute("type", "button")
                let date= new Date()
                let day= date.getDate()
                let month= date.getMonth()
                let year=date.getFullYear()
                dateCreated.textContent=`${month}` + "/" +`${day}`+ "/"+`${year}`
                taskDiv.append(priorityDiv, name, dueDate, dateCreated, button)
                this.contentDiv.appendChild(taskDiv)
            })
        }
       
    }
}

function createNoTasksDiv(){
    const mainContent=document.querySelector(".mainContent")
    const div=document.createElement("div")
    div.classList.add("noTaskMessageDiv")
    const noTaskMessage=document.createElement('p')
    noTaskMessage.classList.add("noTasksMessage")
    const subMessage=document.createElement("p")
    subMessage.classList.add("noTasksSubMessage")
    noTaskMessage.textContent="You have no tasks."
    subMessage.textContent='Click on the "Add" icon to start adding new tasks'
    div.append(noTaskMessage,subMessage)
    mainContent.appendChild(div)
}






 