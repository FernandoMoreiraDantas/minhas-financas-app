import React from "react";
import {Route,Switch,HashRouter} from "react-router-dom";
import CadastroUsuario from "../views/cadastroUsuarios";
import Home from "../views/home";
import Login from "../views/login";
import ConsultaLancamentos from "../views/consultaLancamento";
function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path={"/home"} component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/cadastro-usuarios"} component={CadastroUsuario}/>
                <Route path={"/consulta-lancamentos"} component={ConsultaLancamentos}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas
