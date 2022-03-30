import React from "react";
import {Route,Switch,HashRouter} from "react-router-dom";
import CadastroUsuario from "../views/cadastroUsuarios";
import Home from "../views/home";
import Login from "../views/login";
import ConsultaLancamentos from "../views/lancamentos/consultaLancamento";
import CadastroLancamentos from "../views/cadastro-lancamentos";


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path={"/home"} component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/cadastro-usuarios"} component={CadastroUsuario}/>
                <Route path={"/consulta-lancamentos"} component={ConsultaLancamentos}/>
                <Route path={"/cadastro-lancamentos/:id?"} component={CadastroLancamentos}/>
            </Switch>
        </HashRouter>
    )
}
 
export default Rotas
