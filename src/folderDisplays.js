import { folderStorage } from "./categories"

export default class FolderDisplay {
    constructor(name, array) {
        this.folderToDisplay = name
        this.contentDiv = document.createElement('div')
        this.tasksToDisplay = array
        this.folderTitle = document.createElement("p")
    }

    getTasks = function () {
        this.tasksToDisplay.forEach((task) => {
            this.contentDiv.classList.add("taskContainer")
            let taskDiv=document.createElement("div")
            taskDiv.classList.add(task.taskNumber)
            let priority= task.priority.toLowerCase()
            taskDiv.classList.add(priority)
            taskDiv.classList.add("taskDiv")
            let name=document.createElement("p")
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
            taskDiv.append(name, dueDate, dateCreated, button)
            this.contentDiv.appendChild(taskDiv)
        })
    }
}





 