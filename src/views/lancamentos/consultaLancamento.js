import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-groups";
import SelectMenu from "../../components/select-menu";
import LancamentosTable from "./lancamentosTable";
import LancamentoService from "../../app/service/lancamentoService";
import LocalStoregeService from "../../app/service/localstoregeService";
import * as messages from "../../components/toastr"

class ConsultaLancamentos extends React.Component{

    state = {
        ano:'',
        mes:'',
        tipo:undefined,
        descricao:'',
        lancamentos : []
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    buscar = () =>{

        if(!this.state.ano){
            messages.mensagemErro("O Preenchimento do campo Ano é Obrigatório.");
            return false;
        }

        const usuarioLogado = LocalStoregeService.obterItem('_usuario_logado')

       const lancamentoFitro = {
           ano: this.state.ano,
           mes: this.state.mes,
           tipo: this.state.tipo,
           usuario: usuarioLogado.id,
           descricao:this.state.descricao
       }

       this.service
                   .consultar(lancamentoFitro)
                   .then(resposta =>{
                       this.setState({lancamentos: resposta.data})
                   }).catch(error =>{
                       console.log(error);
                   })

    }

    editar = (id) => {
        console.log('Editando o Lançamento',id);
    }

    deletar = (lancamento) =>{
       this.service
            .deletar(lancamento.id)
            .then(response => {
                const lancamentos = this.state.lancamentos;
                console.log(lancamentos);
                const index = lancamentos.indexOf(lancamento);
                console.log(index);
                lancamentos.splice(index,1);
                this.setState(lancamentos);
                messages.mensagemSucesso('Lançamento deletado com Sucesso.!');
            }).catch(error =>{
                messages.mensagemErro("Erro ao Excluir o Lançamento");
            })
    }

    render(){

        const listaMeses = this.service.obterListaMeses();
        const listaTipo = this.service.obterListaTipos();

       
        return(
            <Card title="Consulta de Lançamentos">
            <div className="row">
                <div className="col-lg-4">
                    <div className="bs-Component"> 
                        <fieldset>
                            <FormGroup label="Ano:*" htmlFor="inputAno">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange = {e => this.setState({ ano: e.target.value })}
                                    placeholder="Informe o Ano"
                                    name="ano" />
                            </FormGroup>
                            <br/>
                            <FormGroup label="Mês:" htmlFor="inputMes">
                                <SelectMenu id="inputMes" 
                                className="form-control" 
                                value={this.state.mes}
                                onChange = {e => this.setState({ mes: e.target.value })}
                                lista = {listaMeses}/>
                            </FormGroup>
                            <br/>
                            <FormGroup label="Descrição:" htmlFor="inputDesc">
                                <input type="text"
                                    className="form-control"
                                    id="inputDesc"
                                    value={this.state.descricao}
                                    onChange = {e => this.setState({ descricao: e.target.value })}
                                    placeholder="Informe a descrição"
                                    name="desc" />
                            </FormGroup>
                            <br/>
                            <FormGroup label="Tipo Lançamento:" htmlFor="inputTipo">
                                <SelectMenu id="inputTipo" 
                                className="form-control" 
                                value = {this.state.tipo}
                                onChange = {e => this.setState({ tipo: e.target.value})}
                                lista = {listaTipo}/>
                            </FormGroup>
                            <br/>
                            <button className="btn btn-success" onClick={this.buscar}>Buscar</button>
                            <button className="btn btn-danger">Cadastrar</button>                            
                            
                           
                        </fieldset>
                    </div>
                </div>
            </div>
            <br/> 
            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component">
                        <LancamentosTable 
                            lancamentos={this.state.lancamentos}
                            deleteAction={this.deletar}
                            editAction={this.editar}/>
                    </div>
                </div>
            </div>
        </Card>


            
        )
    }


}
export default withRouter(ConsultaLancamentos);