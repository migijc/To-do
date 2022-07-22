 import { folderStorage } from "./categories";
 
 let allTasks=[]
 class Tasks{
    constructor(name, description, dueDate, priority){
        this.name=name;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority
    }
}
export default function createNewTask(name, desc, date, pri, folder){
    let newTask= new Tasks(name,desc,date,pri,)
    pushTaskToArray(allTasks, newTask);
    assignTaskToCategory(folder, newTask)
}

function pushTaskToArray(array, newTask){
    array.push(newTask)
}

function assignTaskToCategory(folder, newTask){
    folderStorage[folder].tasks.push(newTask)
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