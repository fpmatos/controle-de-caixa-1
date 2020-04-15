import React, {useState, useEffect} from "react"
import {retornarTodos} from "../../../services/productService"
import "./estilo.css"


export default function Lista(){
    const [itens, setItens] = useState([])

    useEffect(()=>{
        retornarTodos().then((x)=>{
          setItens(x)
        }, [itens])
    })

  

    const deleteItem = (item)=>{
        console.log(`deleta este código ${item}`)
        const filtro = item.filter((e)=>{
            return(e.item!=item)
        })
        
        setItens(filtro)
    }
    

    return(
        <div className="lista">
            <h3 className="text-center py-4">Lista de Produtos</h3>
            {itens.map((x)=>{
                return(
                    <div className="container item my-2">
                        <article>
                            <h3> {x.nome} </h3>
                            <h5> <span>Tipo:</span> {x.tipo} </h5>
                            <p> <span>Valor:</span> {x.valor} <span>R$</span> </p>
                            <p> <span>Código de barras:</span> {x.codigo} </p>
                            <div className="botoes my-1">
                                <button className="btn btn-primary mx-4">Editar</button>
                                <button onClick={()=> deleteItem(x.codigo)} className="btn btn-danger mx-4">Excluir</button>
                            </div>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}