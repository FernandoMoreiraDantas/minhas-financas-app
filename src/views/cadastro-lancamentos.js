import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-groups";
import SelectMenu from "../components/select-menu";
import { withRouter } from "react-router-dom";
import LancamentoService from "../app/service/lancamentoService";
import * as messages from "../components/toastr";
import LocalStoregeService from "../app/service/localstoregeService";

class CadastroLancamentos extends React.Component {


    state = {
        id:null,
        descricao:'',
        valor:'',
        mes:'',
        ano:'',
        tipo:'',
        status:''
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value})
    }

    enviar = () =>{
        const usuarioLogado = LocalStoregeService.obterItem('_usuario_logado')

        const {descricao,valor,mes,ano,tipo} = this.state;
        const lancamento = {descricao,valor,mes,ano,tipo,usuario:usuarioLogado}
      
       this.service
           .salvar(lancamento)
           .then(response =>{
               this.props.history.push('/consulta-lancamentos')
               messages.mensagemSucesso('Lançamento cadastrado com sucesso!');
           }).catch(error =>{
              console.log(error.response.data);
              messages.mensagemErro(error.response.data);
           })
    }


    render() {
        const listaTipos = this.service.obterListaTipos();
        const listaMeses = this.service.obterListaMeses();

        return (
            <Card title="Cadastro de Lançamentos">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input type="text" 
                             id="inputDescricao"
                             name="descricao"
                             value={this.state.descricao}
                             onChange={this.handleChange}
                             className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input type="text" 
                                    id="inputAno" 
                                    name="ano"
                                    value={this.state.ano}
                                    onChange={this.handleChange}
                                    className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu 
                                id="inputMes" 
                                name="mes"
                                value={this.state.mes}
                                onChange={this.handleChange}
                                lista={listaMeses} 
                                className="form-control"/>
                        </FormGroup>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputvalor" label="Valor: *">
                            <input type="text" 
                                   id="inputvalor" 
                                   name="valor"
                                   value={this.state.valor}
                                   onChange={this.handleChange}
                                   className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                           <SelectMenu 
                                    id="inputTipo" 
                                    name="tipo"
                                    value={this.state.tipo}
                                    onChange={this.handleChange}
                                    lista={listaTipos} 
                                    className="form-control"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: *">
                          <input type="text" 
                                  id="inputStatus" 
                                  name="status"
                                  value={this.state.status}
                                  className="form-control"
                                  disabled />
                        </FormGroup>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-success" onClick={this.enviar}>Salvar</button>
                        <button className="btn btn-danger" onClick={e => this.props.history.push('/consulta-lancamentos')}>Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamentos);