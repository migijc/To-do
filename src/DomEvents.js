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


function addNewFolderToSideBar(folder){
    console.log(folder)
    const sideBarFolders=document.querySelector(".sideBarFolders")
    const newFolder=document.createElement("p")
    newFolder.textContent=folder
    console.log(newFolder)
    newFolder.classList=newFolder.textContent.replace(/\s/g,"")
    newFolder.classList.add("sideBarFolder", "customFolder")
    sideBarFolders.appendChild(newFolder)
}



(function displayCustomFolderTasks(){
    document.body.addEventListener("click", (e)=>{
        let mainContent=document.querySelector(".mainContent")
        if((e.target.classList[2]== "customFolder") || (e.target.classList[0]=="AllTasks")){
            mainContent.textContent=""
            console.log(folderStorage)
            console.log(e.target.classList)
            let display= new FolderDisplay(folderStorage[e.target.classList[0]], folderStorage[e.target.classList[0]].tasks)
            display.getTasks()
            mainContent.appendChild(display.contentDiv)
        }
    })
})();

let extendDiv=function(taskNumber){
    console.log(taskNumber)
    let div=document.querySelector("."+ `${taskNumber}`)
    div.classList.add("divExtend")
    let divExtend=null
    console.log(divExtend)
    let buttonToRemove=document.querySelector("."+`${taskNumber}`+">button")
    let description=document.createElement("p")
    let descriptionDiv=document.createElement("div");
    description.textContent=divToExtend.description
    div.removeChild(buttonToRemove)
    createShrinkDivButton(div)
    descriptionDiv.appendChild(description)
    descriptionDiv.classList.add("descriptionDiv")
    description.classList.add("descriptionForTask"+ `${taskNumber}`)
    div.appendChild(descriptionDiv)
}

let shrinkDiv=function(divToExtend){
    let taskId=divToExtend.taskNumberID
    let div=document.querySelector(".task"+`${divToExtend.taskNumberID}`)
    div.classList.remove("divExtend")
    let buttonToRemoveClass=document.querySelector(".task"+`${+taskId}`+">button")
    buttonToRemoveClass.classList.remove("shrinkDiv")
    buttonToRemoveClass.classList.remove("extendClicked")
    buttonToRemoveClass.classList.add("sizeButton")
}



// document.body.addEventListener("click", (e)=>{
//     if(e.target.classList=="sizeButton"){
//         console.log(e)
//         e.target.classList.add("extendClicked")
//         let taskNumber=e.target.parentNode.classList[0]
//         console.log(taskNumber)
//         extendDiv((taskNumber))
//     }
// })

document.body.addEventListener("click", (e)=>{
    if(e.target.classList=="shrinkDiv"){
        console.log(e)
        let taskNumber=e.target.parentNode.classList[0]
        e.target.classList.add("extendClicked")
        shrinkDiv(getTaskOfNumber(taskNumber))
    }
})


function createShrinkDivButton(divToAppend){
    let button=document.createElement("button")
    button.classList.add("shrinkDiv")
    divToAppend.appendChild(button)
}





// console.log(document.querySelector(".1"))

