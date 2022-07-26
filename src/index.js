import css from "./style.css"
import formsCSS from "./forms.css"
import displayCSS from "./taskDisplays.css"
import loadLayout from "./loadLayout"
import {folderStorage} from "./categories"
import displayAllFolders from "./DomEvents"


loadLayout()
let a =(folderStorage.AllTasks.tasks)
let todayTasks=document.querySelector(".tasksToday")




displayAllFolders(folderStorage.AllTasks, folderStorage.AllTasks.tasks)
const selectedFolder=document.querySelectorAll(".aFolderDiv")
console.log(selectedFolder)
selectedFolder[2].classList.add("selectedFolder")
todayTasks.textContent= a.length

console.log(folderStorage)












// createNewFolderUI()


// displayFolderTasks()

// test.appendChild(testTask.formDiv)

// newTaskEntry();
// createNewFolder()