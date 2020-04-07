import React from "react"

const user = [{
    email:"jefer210784@gmail.com",
    senha:"123321"
}]

export const authUser = (email, senha)=>{
    const findUser = user.find(e => e.email===email && e.senha===senha)
    
    if(email==="" || senha==="") return Promise.reject("Primeiro deve preencher os campos")
    if(email.length > 100) return Promise.reject("Email deve conter no máximo 100 caracteres")
    if(senha.length !== 6) return Promise.reject("Senha deve conter no máximo 15 caracteres")
    if(!findUser) return Promise.reject("Usuário não autenticado")
    if(findUser) return Promise.resolve("Usuário Logado")
}