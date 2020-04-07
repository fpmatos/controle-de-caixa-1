const dbProduct = []

export const adicionar = (model)=>{
    dbProduct.push(model)
    return Promise.resolve()
}

export const retornarTodos = ()=>{
    return Promise.resolve(dbProduct)
}