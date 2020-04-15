const dbProduct = []

export const adicionar = (model)=>{
    dbProduct.push(model)
    return Promise.resolve()
}

export const retornarTodos = ()=>{
    return Promise.resolve(dbProduct)
}

export const removerItem = (model)=>{
    const indexToDelete = dbProduct.findIndex(e=> e.model === model)
    dbProduct.splice(indexToDelete, 1)
    return Promise.resolve()
}

