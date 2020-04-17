import React, {useState, useEffect} from "react"
import "./estilo.css"
import { retornarValores } from "../../../services/productService"

export default function Editar(){
    const [item, setItem] = useState([])
    const [model, setModel] = useState()

    useEffect(()=>{
        retornarValores().then((x)=>{
            setItem(x)
        })
    }, [item])

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    return(
        <div>
            {item.map((x)=>{
                return(
                    <form>
                    <div className="text-center">
                        <h3 className="font-weight-bold">Editar Produto</h3>
                    </div>
                    <input onChange={changeModel} name="nome" value={x.nome} className="form-control" />
                    <input onChange={changeModel} name="tipo" value={x.tipo} className="form-control" />
                    <input onChange={changeModel} name="valor" value={x.valor} className="form-control" />
                    <input onChange={changeModel} name="codigo" value={x.codigo} className="form-control" />
                    <button className="btn btn-primary btn-block">Salvar</button>
                </form>
                )
            })}
          
        </div>
    )
}