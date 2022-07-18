import css from "./style.css"
import loadLayout from "./loadLayout"
import newTaskEntry from "./DomEvents"
import {catergoriesArray} from "./categories"
import {createNewFolder} from "./DomEvents"


console.log(catergoriesArray)
loadLayout()
newTaskEntry();
createNewFolder()