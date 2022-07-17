
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
export {editTasks}