import createNewTaskForm from "./taskForm";
export default function newTaskEntry(){
    const addButton=document.querySelector('.addButton')
    addButton.addEventListener("click", ()=>{
        createNewTaskForm()
    })
};