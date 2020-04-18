const dbProduct = []

let lastId = 0;

export const adicionar = (model)=>{
    lastId++;
    model.id = lastId;
    dbProduct.push(model)
    return Promise.resolve()
}

export const alterar = (model) => {
    const itemToChange = dbProduct.find(x => x.id === model.id)
    itemToChange.nome = model.nome
    itemToChange.valor = model.valor
    itemToChange.tipo = model.tipo
    itemToChange.codigo = model.codigo
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

export const retornarItem = (id)=>{
    const itemToEdit = dbProduct.find(x => x.id === +id)

    if(itemToEdit)
        return Promise.resolve(itemToEdit)
    else
        return Promise.reject()
}