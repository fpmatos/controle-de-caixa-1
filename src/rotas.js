import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/login"
import Header from "./component/header"
import Home from "./pages/home"
import CadastroProdutos from "./pages/produtos/cadastro"
import Lista from "./pages/produtos/lista"
import Editar from "./pages/produtos/editar"

const Rotas = ()=>{
    return(
        <BrowserRouter>
           <Header/>
           <Switch>
               <Route exact path="/login" component={Login} />
               <Route exact path="/" component={Home} />
               <Route exact path="/cadastro-produtos" component={CadastroProdutos} />
               <Route exact path="/lista-produtos" component={Lista} />
               <Route exact path="/editar-produtos" component={Editar} />
           </Switch>
        </BrowserRouter>
    )
}

export default Rotas