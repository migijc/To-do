import { openFolderForm } from "./DomEvents"
import { functionsToCreateForms } from "./taskForm"
import { folderStorage } from "./categories"
import createNewFolder from "./categories"
import { addNewFolderToSideBar } from "./DomEvents"
import { testTask } from "./taskForm"
import createNewTask from "./tasks"

function createheaderDiv(){
    const header=document.createElement("div")
    header.classList.add("header")
    document.body.appendChild(header)
    header.textContent="My To-Do"
}
// var styles = getComputedStyle(document.documentElement);
// var todayTasksContent = styles.getPropertyValue('--today-tasks');
// console.log(folderStorage.AllTasks.tasks.length)
// console.log(todayTasksContent)

function addDefaultFoldersToSideBar(sideBar){
    const folders=document.createElement('div')
    folders.classList.add("sideBarFolders")
    const divTodayFolder=document.createElement('div')
    divTodayFolder.classList.add("aFolderDiv")
    const today=document.createElement('p')
    let numberTodayTasksContainer=document.createElement("div")
    numberTodayTasksContainer.classList.add("todayNumberDiv")
    let numberTodayTasks=document.createElement("p")
    numberTodayTasks.classList.add("tasksToday")
    numberTodayTasksContainer.appendChild(numberTodayTasks)
    divTodayFolder.append(today,numberTodayTasksContainer)
    today.textContent="Today"
    today.classList.add("today","todayFolder", "sideBarFolder")
    const divUpcomingFolder=document.createElement('div')
    divUpcomingFolder.classList.add("aFolderDiv")
    const upcoming=document.createElement('p')
    divUpcomingFolder.appendChild(upcoming)
    upcoming.textContent="Upcoming"
    upcoming.classList.add("upcoming","upcomingFolder", "sideBarFolder")
    const divAllTasksFolder=document.createElement('div')
    divAllTasksFolder.classList.add("aFolderDiv")
    const allTasks=document.createElement(('p'))
    divAllTasksFolder.appendChild(allTasks)

    allTasks.textContent="All Tasks"
    allTasks.classList.add("AllTasks", "allTasksFolder", "sideBarFolder")

    const newFolderButton=document.createElement("button")
    newFolderButton.setAttribute("type", "button")
    newFolderButton.classList.add("newFolderButton")
    
    
    folders.append(divTodayFolder, divUpcomingFolder, divAllTasksFolder)
    sideBar.appendChild(folders)
    sideBar.appendChild(newFolderButton)

    if(localStorage["folders"]){
        let jsonFolderArray=JSON.parse(localStorage["folders"])
        jsonFolderArray.forEach((item)=>{
        let jsonFolderArraySplit=item.split(":")
        console.log(jsonFolderArraySplit)
        createNewFolder(jsonFolderArraySplit[0])
        addNewFolderToSideBar(jsonFolderArraySplit[0])
        testTask.addNewOption(jsonFolderArraySplit[0])
        })
    }
    findTasksInLocalStorage()
}


function createMainContentDiv(){
    const mainContent=document.createElement("div")
    mainContent.classList.add("mainContent")
    document.body.appendChild(mainContent)
}

let createSideBarDiv=()=>{
    const sideBar=document.createElement("div")
    sideBar.classList.add("sideBar")
    const addButton=document.createElement("button")
    addButton.classList.add("addButton")
    // addButton.textContent="New Task"
    sideBar.appendChild(addButton)
    document.body.appendChild(sideBar)
    addDefaultFoldersToSideBar(sideBar)
}

// if(localStorage["folders"].length>0){
//     let jsonFolderArray=JSON.parse(localStorage["folders"])
//     jsonFolderArray.forEach((item)=>{
//     let jsonFolderArraySplit=item.split(":")
//     console.log(jsonFolderArraySplit)
//     createNewFolder(jsonFolderArraySplit[0])
//     addNewFolderToSideBar(jsonFolderArraySplit[0])
//     })
// }




function findTasksInLocalStorage(){
    if(localStorage["tasks"]){
        let jsonTasksArray=JSON.parse(localStorage["tasks"])
        jsonTasksArray.forEach((item)=>{
        let jsonTasksArraySplit=item.split(":")
        console.log(jsonTasksArraySplit)
        // createNewFolder(jsonFolderArraySplit[0])
        // addNewFolderToSideBar(jsonFolderArraySplit[0])
        // testTask.addNewOption(jsonFolderArraySplit[0])
        createNewTask(jsonTasksArraySplit[0],jsonTasksArraySplit[1],jsonTasksArraySplit[2],jsonTasksArraySplit[3],jsonTasksArraySplit[4])
        })
    }
}

export default function loadLayout(){
    createheaderDiv();
    createMainContentDiv();
    createSideBarDiv();
}