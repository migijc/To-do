
import createNewTask from "./tasks";
import createNewFolder from "./categories";
import { folderStorage } from "./categories";
import {testForm, testTask} from "./taskForm"
import FolderDisplay from "./folderDisplays"


document.body.addEventListener("click",(e)=>{
    const mainContent=document.querySelector(".mainContent")
    if(e.target.classList=="newFolderButton"){
        mainContent.textContent=""
        mainContent.appendChild(testForm.formDiv)
    } 
})
let folderStorageArray=null
if(!localStorage["folders"]){
     folderStorageArray=[]
} else{
     folderStorageArray=JSON.parse(localStorage["folders"])
}
console.log(folderStorageArray)
document.body.addEventListener("click", (e)=>{
    if(e.target.classList[0]=="submitFolderButton"){
        // localStorage.setItem("folders", JSON.stringify([]))
        // let folderStorageArray=JSON.parse(localStorage['folders'])
        let mainContent=document.querySelector(".mainContent")
        let formDiv=testForm.formDiv
        let name=testForm.inputs[0].value
        let className=name.replace(/\s/g,"").toLowerCase()
        let FolderNameNoSpaces=name.replace(/\s/g,"")
        createNewFolder(name)
        addNewFolderToSideBar(name)
        testTask.addNewOption(name)
        mainContent.removeChild(formDiv)
        displayAllFolders(folderStorage[`${FolderNameNoSpaces}`], folderStorage[`${FolderNameNoSpaces}`].tasks)
        removeSelectecFolderClass()
        let selectedFolder=document.querySelector("."+`${className}`)
        let SelectedFolderDiv=selectedFolder.parentElement
        SelectedFolderDiv.classList.add('selectedFolder')
        let folderAndClass=`${name}`+":"+`${className}`
        folderStorageArray.push(folderAndClass)
        localStorage.setItem("folders",JSON.stringify(folderStorageArray))
    }
})

document.body.addEventListener("click",(e)=>{
    if(e.target.classList=="addButton"){
        let mainContent=document.querySelector(".mainContent")
        mainContent.textContent=""
        mainContent.appendChild(testTask.formDiv)
    } 
})

let allTasks= null;
if(!localStorage["tasks"]){
    allTasks=[]
} else {
    allTasks=JSON.parse(localStorage["tasks"])
}

document.body.addEventListener("click", (e)=>{
    if(e.target.classList[0]=="submitTaskButton"){
        let mainContent=document.querySelector(".mainContent")
        let formDiv=testTask.formDiv
        let name=testTask.inputs[0].value
        let description=testTask.inputs[1].value
        let dueDate=testTask.inputs[2].value
        let priority=testTask.inputs[3].value
        let folder= testTask.inputs[4].value
        let folderToDisplayClass=folder.replace(/\s/g,"")
        console.log(folderToDisplayClass)
        let folderToDisplayClassLC=folderToDisplayClass.toLowerCase()
        if(folderToDisplayClass == "AllTasks"){
            folderToDisplayClass="AllTasks"
            folderToDisplayClassLC=folderToDisplayClass
        }
        console.log(folderToDisplayClass)
        console.log(folderToDisplayClassLC)
        createNewTask(name, description, dueDate, priority, folder)
        let taskToPush=`${name}`+":"+`${description}`+":"+`${dueDate}`+":"+`${priority}`+":"+`${folder}`
        allTasks.push(taskToPush)
        localStorage.setItem("tasks", JSON.stringify(allTasks))
        mainContent.removeChild(formDiv)
        const addButton= document.querySelector(".addButton")
        addButton.disabled=false;
        displayAllFolders(folderStorage[folderToDisplayClass], folderStorage[folderToDisplayClass].tasks)
        let folderDiv=document.querySelector("."+folderToDisplayClassLC)
        folderDiv=folderDiv.parentElement
        removeSelectecFolderClass()
        folderDiv.classList.add("selectedFolder")
    }
})

document.body.addEventListener("click", (e)=>{
    if(e.target.classList=="sizeButton"){
        console.log(e)
        e.target.classList.add("extendClicked")
        let taskNumber=e.target.parentNode.classList[0]
        console.log(taskNumber)
        extendDiv((taskNumber))
    }
})

document.body.addEventListener("click", (e)=>{
    if(e.target.classList=="shrinkDiv"){
        console.log(e)
        let taskNumber=e.target.parentNode.classList[0]
        e.target.classList.add("extendClicked")
        shrinkDiv(taskNumber)
    }
})

document.body.addEventListener("click", (e)=>{
    if(e.target.textContent=="Delete"){
        for (let props in folderStorage){
            folderStorage[props].tasks.forEach((task)=>{
                if(task.taskNumber==e.path[2].classList[0]){
                    folderStorage[props].tasks.splice(folderStorage[props].tasks.indexOf(task),1)
                }
            })
        }        
        let taskToDelete=null
        displayAllFolders(folderStorage.AllTasks, folderStorage.AllTasks.tasks)
    }
})

export function addNewFolderToSideBar(folder){
    console.log(folder)
    const sideBarFolders=document.querySelector(".sideBarFolders")
    const aFolderDiv=document.createElement("div")
    aFolderDiv.classList.add("aFolderDiv")
    const newFolder=document.createElement("p")
    aFolderDiv.appendChild(newFolder)
    newFolder.textContent=folder
    newFolder.classList=newFolder.textContent.replace(/\s/g,"").toLowerCase()
    // classToAdd=classToAdd.toLowerCase
    // newFolder.classList=newFolder.textContent.replace(/\s/g,"")
    console.log(newFolder)
    console.log(sideBarFolders)
    newFolder.classList.add("sideBarFolder", "customFolder")
    sideBarFolders.appendChild(aFolderDiv)
}

(function displayCustomFolderTasks(){
    document.body.addEventListener("click", (e)=>{
        // let mainContent=document.querySelector(".mainContent")
        if((e.target.classList[2]== "customFolder") || (e.target.classList[0]=="AllTasks") || (e.target.classList[0]=="upcoming")|| (e.target.classList[0]=="today")){
            removeSelectecFolderClass()
            e.target.parentNode.classList.add("selectedFolder")
            displayAllFolders(folderStorage[e.target.textContent.replace(/\s/g,"")],folderStorage[e.target.textContent.replace(/\s/g,"")].tasks)
        }
    })
})();

function removeSelectecFolderClass(){
    let folders=document.querySelectorAll(".aFolderDiv")
    console.log(folders)
    folders.forEach((folder)=>{
        if(folder.classList.contains("selectedFolder")){
            folder.classList.remove("selectedFolder")
        }
    })
}

export default function displayAllFolders(folderName, arrayOfTasks){
    let mainContent=document.querySelector(".mainContent")
    mainContent.textContent=""
    let display= new FolderDisplay(folderName, arrayOfTasks)
    display.getTasks()
    mainContent.appendChild(display.contentDiv)
}

let extendDiv=function(taskNumber){
    let div=document.querySelector("."+ `${taskNumber}`)
    div.classList.add("divExtend")
    let divToExtend=getTask(taskNumber)
    let buttonToRemove=document.querySelector("."+`${taskNumber}`+">button")
    let description=document.createElement("p")
    let descriptionDiv=document.createElement("div");
    const divButtons=document.createElement("div")
    divButtons.classList.add("buttons")
    divButtons.classList.add(`${taskNumber}`+"buttons")
    const editButton=document.createElement("button")
    editButton.classList.add("editButton")
    editButton.classList.add(`${taskNumber}`+"editButton")
    editButton.textContent="Edit"
    const deleteButton=document.createElement("button")
    deleteButton.classList.add("deleteButton")
    deleteButton.classList.add(`${taskNumber}`+"deleteButton")
    deleteButton.textContent="Delete"
    divButtons.append(editButton, deleteButton)
    description.textContent=divToExtend.description
    div.removeChild(buttonToRemove)
    createShrinkDivButton(div)
    descriptionDiv.appendChild(description)
    descriptionDiv.classList.add("descriptionDiv")
    description.classList.add("descriptionForTask"+ `${taskNumber}`)
    div.append(descriptionDiv, divButtons)
}

let shrinkDiv=function(taskNumber){
    let divToExtend=getTask(taskNumber)
    let taskId=divToExtend.taskNumberID
    let div=document.querySelector(".task"+`${divToExtend.taskNumberID}`)
    let descriptionDiv=document.querySelector("."+`${taskNumber}`+">.descriptionDiv")
    let buttonDivToRemove=document.querySelector('.'+`${taskNumber}`+">.buttons")
    div.classList.remove("divExtend")
    div.removeChild(descriptionDiv)
    div.removeChild(buttonDivToRemove)
    let buttonToRemoveClass=document.querySelector(".task"+`${+taskId}`+">button")
    buttonToRemoveClass.classList.remove("shrinkDiv")
    buttonToRemoveClass.classList.remove("extendClicked")
    buttonToRemoveClass.classList.add("sizeButton")
}

// for (let props in folderStorage.AllTasks){
//     console.log(props)
// }
function getTask(taskNumber){
    let returnValue=null
    folderStorage.AllTasks.tasks.forEach((task)=>{
    if(task.taskNumber==taskNumber){
         returnValue= task
    }
})
return returnValue
}


function createShrinkDivButton(divToAppend){
    let button=document.createElement("button")
    button.classList.add("shrinkDiv")
    divToAppend.appendChild(button)
}


document.body.addEventListener("click", (e)=>{
    if(e.target.classList[0]=="editButton"){
        let classOfDiv=e.path[2].classList[0]
        let divToEdit=document.querySelector("."+`${classOfDiv}`)
        let nameToEdit=document.querySelector("."+`${classOfDiv}`+ ">.taskName" )
        let dueDateToEdit=document.querySelector("."+`${classOfDiv}`+ ">.dueDate" )
        let descriptionToEdit=document.querySelector("."+`${classOfDiv}`+ ">.descriptionDiv>p")
        let arrayOfItemsToEdit=[nameToEdit, descriptionToEdit,dueDateToEdit]
        if(!arrayOfItemsToEdit[0].isContentEditable){
            console.log(arrayOfItemsToEdit)
            arrayOfItemsToEdit[0].contentEditable="true"
            arrayOfItemsToEdit[1].contentEditable="true"
            arrayOfItemsToEdit[2].contentEditable="true"
            e.target.textContent="Save"
            e.target.classList.add("currentEdit")
        } else{
            arrayOfItemsToEdit[0].contentEditable="false"
            arrayOfItemsToEdit[1].contentEditable="false"
            arrayOfItemsToEdit[2].contentEditable="false"
            e.target.textContent="Edit"
            e.target.classList.remove("currentEdit")
            return
        }
    }
})




// console.log(document.querySelector(".1"))

