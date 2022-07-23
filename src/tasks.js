 import { folderStorage } from "./categories";
 
 let allTasks=[]
 class Tasks{
    constructor(name, description, dueDate, priority){
        this.name=name;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority
        this.taskNumberID=++counter1
        this.taskNumber=classToAdd+ ++counter
        
    }
}

let counter=0
let counter1=0
let classToAdd="task"
export default function createNewTask(name, desc, date, pri, folder){
    let newTask= new Tasks(name,desc,date,pri,)
    pushTaskToArray(folderStorage.AllTasks.tasks, newTask);
    assignTaskToCategory(folder, newTask)
}

function pushTaskToArray(array, newTask){
    array.push(newTask)
}

function assignTaskToCategory(folder, newTask){
    if(folder=="AllTasks"){
        return;
    } else {
        folderStorage[folder.replace(/\s/g,"")].tasks.push(newTask)
    }
}

const editTasks={
    editTaskName:function(task, newName){
       task.name=newName
   },
    editTaskDueDate:function(task, newDueDate){
       task.dueDate=newDueDate
   },
    editTaskDescription:function(task, newDescription){
       task.description=newDescription
   },
    editTaskPriority:function(task, newPriortiy){
       task.priority=newPriortiy
   }
};




export {allTasks}