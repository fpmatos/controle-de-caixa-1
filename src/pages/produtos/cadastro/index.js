import React, {useState} from "react"
import "./estilo.css"
import { adicionar } from "../../../services/productServer"

export default function CadastroProdutos({history}){
    const [product, setProduct] = useState({nome:"", tipo:"", valor:"", codigo:""})

    const changeModel = ({target})=>{
        setProduct((state)=>{
            return {...state,[target.name]:target.value}
        })
    }
    
    const carregar = ()=>{
       adicionar(product).then(()=>{
           history.push("/lista-produtos")
       })
    }

    return(
        <div className="cadastro-produtos d-flex align-item-center">
            <form onSubmit={carregar} className="form-sigin mx-auto">
                <div className="text-center py-4">
                    <h2 className="font-weight-bold">Cadastro de Produtos</h2>
                </div>
                
                    <input onChange={changeModel} className="form-control" type="name" placeholder="nome do produto" name="nome"/>
                
                    <input onChange={changeModel} className="form-control" type="name" placeholder="tipo" name="tipo" />
                
                    <input onChange={changeModel} className="form-control" type="number" placeholder="valor" name="valor" />
                
                    <input onChange={changeModel} className="form-control" type="number" placeholder="código de barras" name="codigo" />
                
                <button className="btn btn-success btn-block btn-lg my-2">Cadastrar</button>
            </form>
        </div>
    )
}