import React, {useState, useEffect} from "react"
import "./estilo.css"
import { retornarItem, alterar } from "../../../services/productService"
import { useParams, useHistory } from "react-router-dom";

export default function Editar(){
    let { id } = useParams()
    const history = useHistory()

    const [model, setModel] = useState({nome: '', tipo: '', valor: '', codigo: ''})

    useEffect(()=>{
        retornarItem(id).then((x)=>{
            setModel(x)
        }).catch(x => {
            history.push('/lista-produtos')
        })
    }, [])

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const save = (event) => {
        
        alterar(model).then(() => {
            history.push('/lista-produtos')
        })
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={save}>
                <div className="text-center">
                    <h3 className="font-weight-bold">Editar Produto</h3>
                </div>
                <input onChange={changeModel} name="nome" value={model.nome} className="form-control" />
                <input onChange={changeModel} name="tipo" value={model.tipo} className="form-control" />
                <input onChange={changeModel} name="valor" value={model.valor} className="form-control" />
                <input onChange={changeModel} name="codigo" value={model.codigo} className="form-control" />
                <button type="submit" className="btn btn-primary btn-block">Salvar</button>
            </form>          
        </div>
    )
}