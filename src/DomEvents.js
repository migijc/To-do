// import createNewTaskForm from "./taskForm";
import createNewTask from "./tasks";
import { nameInput, folderSelect, descriptionInput, dueDateInput, priorityInput } from "./taskForm";
// import { descriptionInput } from "./taskForm";
// import { dueDateInput } from "./taskForm";
// import { priorityInput } from "./taskForm";
import { allTasks } from "./tasks"
import createNewFolder from "./categories";
import { functionsToCreateForms } from "./taskForm";
// // import { addNewFolderToSideBar } from "./categories";
import { folderStorage } from "./categories";
import {folders} from "./taskForm"
import {testForm, testTask} from "./taskForm"
import {getAllFolders, createNewFolderForm} from "./taskForm"
import FolderDisplay from "./folderDisplays"


document.body.addEventListener("click",(e)=>{
    const mainContent=document.querySelector(".mainContent")
    if(e.target.classList=="newFolderButton"){
        mainContent.appendChild(testForm.formDiv)
    } 
})

document.body.addEventListener("click", (e)=>{
    if(e.target.classList[0]=="submitFolderButton"){
        let mainContent=document.querySelector(".mainContent")
        let formDiv=testForm.formDiv
        let name=testForm.inputs[0].value
        createNewFolder(name)
        addNewFolderToSideBar(name)
        testTask.addNewOption(name)
        mainContent.removeChild(formDiv)
    }
})


document.body.addEventListener("click",(e)=>{
    if(e.target.classList=="addButton"){
        console.log(testTask.inputs)
        let mainContent=document.querySelector(".mainContent")
        mainContent.appendChild(testTask.formDiv)
        document.body.classList.add("blur")
        e.target.disabled=true
    } 
})

document.body.addEventListener("click", (e)=>{
    if(e.target.classList[0]=="submitTaskButton"){
        let mainContent=document.querySelector(".mainContent")
        let formDiv=testTask.formDiv
        let name=testTask.inputs[0].value
        let description=testTask.inputs[1].value
        let dueDate=testTask.inputs[2].value
        let priority=testTask.inputs[3].value
        let folder= testTask.inputs[4].value
        createNewTask(name, description, dueDate, priority, folder)
        mainContent.removeChild(formDiv)
        const addButton= document.querySelector(".addButton")
        addButton.disabled=false;
    }
})

 function displayTasks(){
    const  mainContent=document.querySelector('.mainContent')
    allTasks.forEach((task)=>{
        let taskDiv=document.createElement('div')
        let name=document.createElement('p')
        let description=document.createElement('p')
        description.textContent=task.description
        let dueDate=document.createElement('p')
        dueDate.textContent=task.dueDate
        let priority=document.createElement('p')
        priority.textContent=task.priority
        name.textContent=task.name
        taskDiv.appendChild(name)
        taskDiv.appendChild(description)
        taskDiv.appendChild(dueDate)
        taskDiv.appendChild(priority)

        mainContent.appendChild(taskDiv)
    })
}

function addNewFolderToSideBar(folder){
    const sideBarFolders=document.querySelector(".sideBarFolders")
    const newFolder=document.createElement("p")
    newFolder.textContent=folder
    newFolder.classList=newFolder.textContent.replace(/\s/g,"")
    newFolder.classList.add("sideBarFolder", "customFolder")
    sideBarFolders.appendChild(newFolder)
}



(function displayCustomFolderTasks(){
    document.body.addEventListener("click", (e)=>{
        let mainContent=document.querySelector(".mainContent")
        console.log(e.target)
        if((e.target.classList[2]== "customFolder") || (e.target.classList[0]=="allTasks")){
            let display= new FolderDisplay(folderStorage[e.target.classList[0]], folderStorage[e.target.classList[0]].tasks)
            display.getTasks()
            mainContent.appendChild(display.contentDiv)
        }
    })
})();
