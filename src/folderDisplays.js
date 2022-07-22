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
            let taskDiv=document.createElement("div")
            let name=document.createElement("p")
            let dueDate=document.createElement('p')
            name.textContent=task["name"]
            dueDate.textContent=task["dueDate"]
            taskDiv.append(name, dueDate)
            this.contentDiv.appendChild(taskDiv)
        })
    }
}

 