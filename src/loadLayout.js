
function createheaderDiv(){
    const header=document.createElement("div")
    header.classList.add("header")
    document.body.appendChild(header)
}

function createMainContentDiv(){
    const mainContent=document.createElement("div")
    mainContent.classList.add("mainContent")
    document.body.appendChild(mainContent)
}

let createSideBarDiv=()=>{
    const sideBar=document.createElement("div")
    sideBar.classList.add("sideBar")
    const addButton=document.createElement("button")
    addButton.classList.add("addButton")
    addButton.textContent="New Task"
    sideBar.appendChild(addButton)
    document.body.appendChild(sideBar)

}


export default function loadLayout(){
    createheaderDiv();
    createMainContentDiv();
    createSideBarDiv();
}