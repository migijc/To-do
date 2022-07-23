import css from "./style.css"
import formsCSS from "./forms.css"
import displayCSS from "./taskDisplays.css"
import loadLayout from "./loadLayout"
import newTaskEntry, { createNewFolderUI } from "./DomEvents"
import {folderStorage} from "./categories"
import {allTasks} from "./tasks"
import createNewTask from "./tasks"
import {displayFolderTasks} from "./DomEvents"
import {folders} from "./taskForm"
import {testForm, testTask} from "./taskForm"
import {test1} from "./folderDisplays"

loadLayout()
console.log(folderStorage)
console.log(allTasks)
createNewTask("Buy lightBulbs", "40watts", "03/17/2023", "high", "AllTasks")















// createNewFolderUI()


// displayFolderTasks()

// test.appendChild(testTask.formDiv)

// newTaskEntry();
// createNewFolder()