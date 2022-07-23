import newTaskEntry, { createNewFolderUI } from "./DomEvents"
import { testForm } from "./taskForm"

 class Folders {
    constructor(name){
        this.name=name
        this.tasks=[]
    }
}
let folderStorage= {}

export default function createNewFolder(folderName){
    let folder=new Folders(folderName.replace(/\s/g,""))
    addFolderToObject(folder)
    // testForm.addNewOption(folderName)
    // createNewFolderUI()
}

function addFolderToObject(folder){
    folderStorage[folder.name]=folder
}

const all= createNewFolder("All Tasks")
const today=createNewFolder("Today")
const upcoming=createNewFolder("Upcoming")



// export function addNewFolderToSideBar(folder){
//     const sideBar=document.querySelector(".sideBar")
//     const newFolder=document.createElement("p")
//     newFolder.classList.add(`${folder}`)
//     newFolder.classList.add("sideBarFolder customFolder")
//     sideBar.appendChild(newFolder)
// }



export {folderStorage}






