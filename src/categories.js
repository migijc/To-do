 class Categories {
    constructor(name){
        this.name=name
        this.tasks=[]
    }
}
let catergoriesArray= []

export default function createNewCategory(name){
    let category=new Categories(name)
    pushCategoryToArray(category)
}

function pushCategoryToArray(category){
    catergoriesArray.push(category)
}




export {catergoriesArray}






