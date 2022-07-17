 import { catergoriesArray } from "./categories";

let tasks=[]

 class Tasks{
    constructor(name, description, dueDate, priority){
        this.name=name;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority
    }
}


export default function createNewTask(name, desc, date, pri){
    let newTask= new Tasks(name,desc,date,pri)
    pushTaskToArray(tasks, newTask);
    assignTaskToCategory(catergoriesArray, newTask)
}

function pushTaskToArray(array, newTask){
    array.push(newTask)
}

function assignTaskToCategory(categories, newTask){
    categories[0].tasks.push(newTask)
}

export {tasks}