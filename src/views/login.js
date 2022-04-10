import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-groups";
import {withRouter} from "react-router-dom";
import UsuarioService from "../app/service/usuarioService";
import {mensagemErro} from '../components/toastr'
import { AuthContext } from "../main/provedorAutenticacao";

class Login extends React.Component{

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    state={
        email:'',
        senha:''
    }

    entrar = () => {
        if(!this.state.email){
            mensagemErro('Informe o e-mail');
            return false;
        }

        if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            mensagemErro('Informe um e-mail válido.');
            return false;
        }

        if(!this.state.senha){
            mensagemErro('Informe a Sennha');
            return false;
        }



        this.service.autenticar({ email: this.state.email, senha: this.state.senha })
            .then(response => {
                this.context.iniciarSessao(response.data)                
                this.props.history.push('/home')
            }).catch(erro => {
                mensagemErro(erro.response.data)
            })
    }
    prepareCadastrar = () =>{
      this.props.history.push('/cadastro-usuarios')
    }

    render(){
        return(
               <div className="row">
                   <div className="col-md-6 offset-md-3">
                        <div className="bs-docs-section">
                            <Card title="Login">
                               <div className="row">
                                    <div className="col-lg-12"> 
                                            <div className="bs-Component">
                                                <fieldset>
                                                    <FormGroup label="Email:*" htmlFor="email">
                                                        <input type="email" 
                                                        value={this.state.email}
                                                               onChange={e => this.setState({email:e.target.value})} 
                                                               className="form-control"
                                                               id="email"
                                                               aria-describedby="emailHelp"
                                                               placeholder="Digite o e-mail"/>

                                                    </FormGroup>
                                                    <br/>
                                                    <FormGroup label="Senha:*" htmlFor="senha">
                                                        <input type="password" 
                                                               value={this.senha}
                                                               onChange={e => this.setState({senha:e.target.value})}
                                                               className="form-control"
                                                               id="senha"
                                                               aria-describedby="emailHelp"
                                                               placeholder="Password"/>

                                                    </FormGroup>
                                                    <br/>
                                                    <button onClick={this.entrar} 
                                                            className="btn btn-success">
                                                               <i className="pi pi-sign-in"/> Entrar
                                                    </button>
                                                    <button onClick={this.prepareCadastrar} 
                                                            className="btn btn-danger">
                                                                 <i className="pi pi-plus"/> Cadastrar
                                                    </button>
                                                </fieldset>
                                            </div>
                                    </div>
                                </div>
                            </Card>
                            
                        </div>
                   </div>
               </div>
        )
    }
}

Login.contextType = AuthContext;

export default withRouter(Login)
