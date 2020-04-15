import React, {useState, useEffect} from "react"
import {retornarTodos} from "../../../services/productService"
import "./estilo.css"
import {removerItem} from "../../../services/productService"


export default function Lista(){
    const [itens, setItens] = useState([])

    useEffect(()=>{
        retornarTodos().then((x)=>{
          setItens(x)
        }, [itens])
    })

  
const deleteItem = (itemCodigo)=>{
    removerItem(itemCodigo).then(()=>{
        setItens((state)=>{
          const  newList = [...state]
          const indexToDelete = itens.findIndex(e=>e.itemCodigo===itemCodigo)
          newList.splice(indexToDelete, 1)
          return (newList)
        })
    })
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