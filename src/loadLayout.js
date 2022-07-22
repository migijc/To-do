import { openFolderForm } from "./DomEvents"
import { functionsToCreateForms } from "./taskForm"
function createheaderDiv(){
    const header=document.createElement("div")
    header.classList.add("header")
    document.body.appendChild(header)
}

function addDefaultFoldersToSideBar(sideBar){
    const folders=document.createElement('div')
    folders.classList.add("sideBarFolders")
    const inbox=document.createElement('p')
    inbox.textContent="Inbox"
    inbox.classList.add("inbox")
    const today=document.createElement('p')
    today.textContent="Today"
    today.classList.add("today","todayFolder", "sideBarFolder")
    const upcoming=document.createElement('p')
    upcoming.textContent="Upcoming"
    upcoming.classList.add("upcoming","upcomingFolder", "sideBarFolder")
    const allTasks=document.createElement(('p'))
    allTasks.textContent="All Tasks"
    allTasks.classList.add("allTasks", "allTasksFolder", "sideBarFolder")

    const newFolderButton=document.createElement("button")
    newFolderButton.setAttribute("type", "button")
    newFolderButton.classList.add("newFolderButton")
    
    
    folders.appendChild(inbox)
    folders.appendChild(today)
    folders.appendChild(upcoming)
    folders.appendChild(allTasks)
    sideBar.appendChild(folders)
    sideBar.appendChild(newFolderButton)

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
    addButton.textContent="New Task"
    sideBar.appendChild(addButton)
    document.body.appendChild(sideBar)
    addDefaultFoldersToSideBar(sideBar)


}

// openFolderForm()


export default function loadLayout(){
    createheaderDiv();
    createMainContentDiv();
    createSideBarDiv();
}