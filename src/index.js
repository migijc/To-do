import css from "./style.css"
import createNewTask from "./createTasks"
import { tasks } from "./createTasks"
import { catergoriesArray } from "./categories"
import {editTasks} from "./editTasks"

createNewTask(1,2,3,4)

console.log(tasks)
console.log(catergoriesArray[0].tasks)
console.log(editTasks)
editTasks.editTaskName(tasks[0], "hello")
console.log(tasks[0])
