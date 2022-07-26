import { folderStorage } from "./categories"


let folders=["All Tasks"]
// for (let props in folderStorage){
//     folders.push(props)
// }

export {folders}

let priorities=["Low", "Normal", "High"]
class Forms{
    constructor(name,formClassName){
        this.formName=name;
        this.formDiv=document.createElement('form') 
        this.elementsToAppend=[]
        this.formClassName=formClassName
        this.submitButton=document.createElement('button')
        this.inputs=[]
    }

    addInput= function(type, name, id,labelText,boolean){
        this.formDiv.classList.add(this.formClassName)
        this.formDiv.classList.add("form")
        let inputDiv=document.createElement('div')
        inputDiv.classList.add(id + "Div")
        inputDiv.classList.add("inputDiv")
        let label=document.createElement('label')
        let element= document.createElement('input')
        label.setAttribute("for", id)
        label.textContent=labelText
        if(boolean){
            element.setAttribute("placeholder", labelText)
            label.textContent=null
        }
        element.setAttribute("type", type)
        element.setAttribute("name", name)
        element.setAttribute("id", id)
        inputDiv.appendChild(label)
        inputDiv.appendChild(element)
        this.elementsToAppend.push(inputDiv)
        this.inputs.push(element)
        this.formDiv.appendChild(inputDiv)
    }

    createTextArea=function(name,id,defaulValue){
        let textAreaDiv=document.createElement('div')
        textAreaDiv.classList.add("inputDiv")
        let textArea=document.createElement("textarea")
        textArea.setAttribute("placeholder", defaulValue)
        let label=document.createElement("label")
        textArea.classList.add(name)
        textArea.classList.add(id)
        // label.textContent=labelText
        label.setAttribute("for", id)
        textAreaDiv.append(label, textArea)
        this.inputs.push(textArea)
        this.formDiv.appendChild(textAreaDiv)
    }

    appendElementsToForm= function(){
        this.elementsToAppend.forEach((element)=>{
            this.formDiv.appendChild(element)
        })
    }

    addButtonToForm=function(buttonClassName){
        this.formDiv.appendChild(this.submitButton)
        this.submitButton.textContent="+"
        this.submitButton.classList.add(buttonClassName)
        this.submitButton.classList.add("submitButton")
        this.submitButton.setAttribute("type", "button")
    }

    addSelectInput=function(array,id,labelText){
        let selectDiv=document.createElement("div")
        let select=document.createElement("select")
        selectDiv.classList.add("inputDiv")
        selectDiv.classList.add(id + "Div")
        select.setAttribute("id", id)
        let label=document.createElement('label')
        label.setAttribute("for", id)
        label.textContent=labelText
        selectDiv.appendChild(label)
        selectDiv.appendChild(select)
        array.forEach((item)=>{
            let option=document.createElement("option")
            option.textContent=item
            option.setAttribute("value",item)
            select.appendChild(option)
        })
        this.formDiv.appendChild(selectDiv)
        this.inputs.push(select)
    }

    addNewOption=function(newOption){
        let option=document.createElement("option")
        option.setAttribute("value", newOption)
        option.textContent=newOption
        this.inputs[4].appendChild(option)
    }
}

const testForm=new Forms("folder", "newFolderForm");
testForm.addInput("text", "folderName", "folderName","Folder Name:")
testForm.addButtonToForm("submitFolderButton")

let testTask=new Forms("task", "newTaskForm");
testTask.addInput("text", "taskName", "taskName", "Task Name", true)
testTask.createTextArea("description", "description", "Description", "Description")
testTask.addInput("date", "dueDate", "dueDate","Due Date:")
testTask.addSelectInput(priorities, "priorities", "Priority: ")
testTask.addSelectInput(folders, "folders", "Folder: ")
testTask.addButtonToForm("submitTaskButton")



export {testForm, testTask}
