import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-groups";
import {withRouter} from "react-router-dom";

class Login extends React.Component{

    state={
        email:'',
        senha:''
    }

    entrar = () =>{
        console.log('E-mail:',this.state.email)
        console.log('Senha:',this.state.senha)
    }
    prepareCadastrar = () =>{
      this.props.history.push('/cadastro-usuarios')
    }

    render(){
        return(
               <div className="row">
                   <div className="col-md-6" style={ {position:'relative',left:'300px'} }>
                        <div className="bs-docs-section">
                            <Card title="Login">
                               <div className="row">
                                    <div className="col-lg-12"> 
                                            <div className="bs-Component">
                                                <fieldset>
                                                    <FormGroup label="Email:*" htmlFor="exampleInputEmail1">
                                                        <input type="email" 
                                                        value={this.state.email}
                                                               onChange={e => this.setState({email:e.target.value})} 
                                                               className="form-control"
                                                               id="exampleInputEmail1"
                                                               aria-describedby="emailHelp"
                                                               placeholder="Digite o e-mail"/>

                                                    </FormGroup>
                                                    <br/>
                                                    <FormGroup label="Senha:*" htmlFor="exampleInputPassword1">
                                                        <input type="password" 
                                                               value={this.senha}
                                                               onChange={e => this.setState({senha:e.target.value})}
                                                               className="form-control"
                                                               id="exampleInputEmail1"
                                                               aria-describedby="emailHelp"
                                                               placeholder="Password"/>

                                                    </FormGroup>
                                                    <br/>
                                                    <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                                    <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
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

export default withRouter(Login)
