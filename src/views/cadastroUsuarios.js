import React from "react";

import Card from "../components/card";
import FormGroup from "../components/form-groups";

class CadastroUsuario extends React.Component{
    state={
        nome:'',
        email:'',
        senha:'',
        senhaRepeticao:''

    }
    cadastrar = () =>{
        console.log(this.state)
       
    }

    render(){
        return (
            <div className="container">
                <Card title="Cadastro de Usuário">
                <div className="row">
                                    <div className="col-lg-12"> 
                                            <div className="bs-Component">
                                                <fieldset>
                                                <FormGroup label="Nome:*" htmlFor="inputNome">
                                                        <input type="text" 
                                                            value={this.state.email}
                                                            className="form-control"
                                                            id="inputNome"
                                                            placeholder="Digite o nome"
                                                            name="nome"
                                                            onChange={e => this.setState({nome:e.target.value})} />

                                                    </FormGroup>
                                                    <br/>
                                                    <FormGroup label="Email:*" htmlFor="inputEmail">
                                                        <input type="text" 
                                                        value={this.state.email}
                                                               className="form-control"
                                                               id="inputEmail"
                                                               aria-describedby="emailHelp"
                                                               placeholder="Digite o e-mail"
                                                               onChange={e => this.setState({email:e.target.value})} />

                                                    </FormGroup>
                                                    <br/>
                                                    <FormGroup label="Senha:*" htmlFor="inputSenha">
                                                        <input type="password" 
                                                               value={this.senha}
                                                               className="form-control"
                                                               id="inputSenha"
                                                               placeholder="Password"
                                                               onChange={e => this.setState({senha:e.target.value})}/>

                                                    </FormGroup>
                                                    <br/>
                                                    <FormGroup label="Confirme a Senha:*" htmlFor="inputSenhaRepetida">
                                                        <input type="password" 
                                                               value={this.senha}
                                                               className="form-control"
                                                               id="inputSenhaRepetida"
                                                               placeholder="Confirme a senha"
                                                               onChange={e => this.setState({senhaRepeticao:e.target.value})}/> 

                                                    </FormGroup>
                                                    <br/>
                                                    <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                                                    <button className="btn btn-danger">Cancelar</button>
                                                </fieldset>
                                            </div>
                                    </div>
                                </div>
                </Card>
            </div>
        )
    }
}

export default CadastroUsuario