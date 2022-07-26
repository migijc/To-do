 import { folderStorage } from "./categories";
 
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

// let allTasks= null;
// if(!localStorage["tasks"]){
//     allTasks=[]
// } else {
//     allTasks=JSON.parse(localStorage["tasks"])
// }

let counter=0
let counter1=0
let classToAdd="task"
export default function createNewTask(name, desc, date, pri, folder){
    let newTask= new Tasks(name,desc,date,pri,)
    pushTaskToArray(folderStorage.AllTasks.tasks, newTask);
    console.log(folderStorage)
    assignTaskToCategory(folder, newTask)
    // let taskToPush=`${name}`+":"+`${desc}`+":"+`${date}`+":"+`${pri}`+":"+`${folder}`
    // allTasks.push(taskToPush)
    // localStorage.setItem("tasks", JSON.stringify(allTasks))
    
}

function pushTaskToArray(array, newTask){
    array.push(newTask)
}

function assignTaskToCategory(folder, newTask){
    if(folder=="All Tasks"){
        return;
    } else {
        console.log(folder)
        console.log(newTask)
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




