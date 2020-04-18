import React, {useState, useEffect} from "react"
import {retornarTodos} from "../../../services/productService"
import "./estilo.css"
import {removerItem} from "../../../services/productService"
import { editarCodigo } from "../../../services/productService"



export default function Lista({history}){
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

const editar = (editCodigo)=>{
    history.push( `/editar-produtos/${editCodigo}`)
}
    

    return(
        <div className="lista">
            <h3 className="text-center py-4">Lista de Produtos</h3>
                <table style={{width: "80%"}} className="container item my-2">
                    <tr style={{fontWeight:"bold"}}>
                        <td>NOME</td>
                        <td>TIPO</td>
                        <td>VALOR</td>
                        <td>CÓDIGO</td>
                        <td></td>
                        <td></td>
                    </tr>
                
                {itens.map((x)=>
                     <tr>
                         <td> {x.nome} </td>
                         <td> {x.tipo} </td>
                         <td> {x.valor} </td>
                         <td> {x.codigo} </td>
                         <td> <button onClick={()=> editar(x.id)}  className="btn btn-primary btn-x5">Editar</button> </td>
                         <td> <button onClick={()=> deleteItem(x.id)}  className="btn btn-danger btn-x5">Excluir</button> </td>
                     </tr>
                 )}
                </table>
        </div>
    )
}

