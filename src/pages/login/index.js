import React, {useState} from "react"
import "./estilo.css"
import {authUser} from "../../services/authUser"

export default function Login(){

    const [model, setModel] = useState({email:"", senha:""})
    const [message, setMessage] = useState()

    const changeModel = ({target})=>{
      setModel((state)=>{
          return {...state, [target.name]:target.value}
      })
    }

    const logar = (event)=>{
        authUser(model.email, model.senha).then(resultado=>{
            setMessage(resultado)
         }).catch(erro=>{
             setMessage(erro)
         })

         event.preventDefault()
    }

    

    return(
        <div onSubmit={logar} className="login-content d-flex align-item-center">
            <form className="form-singin mx-auto">
                <div className="text-center">
                    <h2 className="font-weight-bold">Login</h2>
                </div>
                
                   <input onChange={changeModel} className="form-control my-2" name="email" type="email" placeholder="Digite o email" />
                
                    <input onChange={changeModel} className="form-control my-2" name="senha" type="password" placeholder="Digite a senha" />
                
                <button className="btn btn-primary btn-block btn-lg my-2" type="submit">Logar</button>
                <div className="text-center">
                    <span className="text-primary font-weight-bold mx-2">Recuperar Senha</span>
                    <span className="text-primary font-weight-bold mx-2">Cadastrar</span>
                </div>
                <div className="text-center">
                    <span className="text-primary"> {message} </span>
                </div>
            </form>
        </div>
    )
}