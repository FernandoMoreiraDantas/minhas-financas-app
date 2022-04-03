import React from "react";

import Card from "../components/card";
import FormGroup from "../components/form-groups";
import { withRouter } from "react-router-dom";

import UsuarioService from "../app/service/usuarioService";
import { mensagemErro, mensagemSucesso } from "../components/toastr";

class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''

    }

    constructor() {
        super()
        this.service = new UsuarioService();
    }

    validar(){
        
    }


    cadastrar = () => {
        const {nome, email, senha, senhaRepeticao} = this.state;
        const usuario = {nome, email, senha, senhaRepeticao }
        
        try {
            this.service.validar(usuario);
        } catch (erro) {
            const mensagens = erro.mensagens;
            mensagens.forEach(msg => mensagemErro(msg));
            return false;
        }

        this.service.salvar(usuario)
            .then(response => {
                mensagemSucesso('Usuário cadastrado com Sucesso.')
                this.props.history.push('login')
            })
            .catch(error => {
                mensagemErro(error.response.data)
            })

    }
    cancelar = () => {
        this.props.history.push('login')

    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-Component">
                            <fieldset>
                                <FormGroup label="Nome:*" htmlFor="inputNome">
                                    <input type="text"
                                        value={this.state.nome}
                                        className="form-control"
                                        id="inputNome"
                                        placeholder="Digite o nome"
                                        name="nome"
                                        onChange={e => this.setState({ nome: e.target.value })} />

                                </FormGroup>
                                <br />
                                <FormGroup label="Email:*" htmlFor="inputEmail">
                                    <input type="text"
                                        value={this.state.email}
                                        className="form-control"
                                        id="inputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Digite o e-mail"
                                        onChange={e => this.setState({ email: e.target.value })} />

                                </FormGroup>
                                <br />
                                <FormGroup label="Senha:*" htmlFor="inputSenha">
                                    <input type="password"
                                        value={this.senha}
                                        className="form-control"
                                        id="inputSenha"
                                        placeholder="Password"
                                        onChange={e => this.setState({ senha: e.target.value })} />

                                </FormGroup>
                                <br />
                                <FormGroup label="Confirme a Senha:*" htmlFor="inputSenhaRepetida">
                                    <input type="password"
                                        value={this.senhaRepeticao}
                                        className="form-control"
                                        id="inputSenhaRepetida"
                                        placeholder="Confirme a senha"
                                        onChange={e => this.setState({ senhaRepeticao: e.target.value })} />

                                </FormGroup>
                                <br />
                                <button onClick={this.cadastrar} 
                                        className="btn btn-success">
                                         <i className="pi pi-save"/> Salvar
                                </button>
                                <button onClick={this.cancelar} 
                                        className="btn btn-danger">
                                           <i className="pi pi-times"/> Cancelar
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario)