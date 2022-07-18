import createNewTaskForm from "./taskForm";
import createNewTask from "./tasks";
import { nameInput } from "./taskForm";
import { descriptionInput } from "./taskForm";
import { dueDateInput } from "./taskForm";
import { priorityInput } from "./taskForm";
import { tasks } from "./tasks"
import { formDiv } from "./taskForm";
import { displayTasks } from "./tasks";
import createNewCategory from "./categories";
import { functionsToCreateForms } from "./taskForm";




export default function newTaskEntry(){
    const addButton=document.querySelector('.addButton')
    addButton.addEventListener("click", ()=>{
        createNewTaskForm()
        functionsToCreateForms.createNewTaskForm1()
        createSumbittedTask()
    })
};

export function createSumbittedTask(){
    const mainContent=document.querySelector(".mainContent")
    const submitTaskButton=document.querySelector(".submitTaskButton")
    submitTaskButton.addEventListener("click", ()=>{
        let name=nameInput.value
        let description=descriptionInput.value;
        let dueDate=dueDateInput.value;
        let priority=priorityInput.value
        createNewTask(name, description, dueDate, priority)
        console.log(tasks)
        mainContent.removeChild(formDiv)
        displayTasks()
    })
};

export function createNewFolder(){
    let button=document.querySelector(".newFolderButton")
    button.addEventListener("click", ()=>{
    functionsToCreateForms.createNewFolderForm()

    })
}