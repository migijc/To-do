
 class Folders {
    constructor(name){
        this.name=name
        this.tasks=[]
    }
}
let folderStorage= {}

export default function createNewFolder(folderName){
    let folder=new Folders(folderName.replace(/\s/g,""))
    addFolderToObject(folder)
}

function addFolderToObject(folder){
    folderStorage[folder.name]=folder
}

const all= createNewFolder("All Tasks")
const today=createNewFolder("Today")
const upcoming=createNewFolder("Upcoming")

export {folderStorage}






