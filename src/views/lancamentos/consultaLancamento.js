import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-groups";
import SelectMenu from "../../components/select-menu";
import LancamentosTable from "./lancamentosTable";
import LancamentoService from "../../app/service/lancamentoService";
import LocalStoregeService from "../../app/service/localstoregeService";

class ConsultaLancamentos extends React.Component{

    state = {
        ano:'',
        mes:'',
        tipo:'',
        lancamentos : []
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    buscar = () =>{

        const usuarioLogado = LocalStoregeService.obterItem('_usuario_logado')

       const lancamentoFitro = {
           ano: this.state.ano,
           mes: this.state.mes,
           tipo: this.state.tipo,
           usuario: usuarioLogado.id
       }

       this.service
                   .consultar(lancamentoFitro)
                   .then(resposta =>{
                       this.setState({lancamentos: resposta.data})
                   }).catch(error =>{
                       console.log(error);
                   })

    }

    render(){

        const listaMeses=[
            {label:'Selecione',value:''},
            {label:'Janeiro',value:'1'},
            {label:'Fevereiro',value:'2'},
            {label:'Março',value:'3'},
            {label:'Abril',value:'4'},
            {label:'Maio',value:'5'},
            {label:'Junho',value:'6'},
            {label:'Julho',value:'7'},
            {label:'Agosto',value:'8'},
            {label:'Setembro',value:'9'},
            {label:'Outrubro',value:'10'},
            {label:'Novembro',value:'11'},
            {label:'Dezembro',value:'12'}
        ]
        const listaTipo=[
            {label:'Selecione',value:''},
            {label:'Receita',value:'RECEITA'},
            {label:'Despesa',value:'DESPESA'}
        ]

       
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
                        <LancamentosTable lancamentos={this.state.lancamentos}/>
                    </div>
                </div>
            </div>
        </Card>


            
        )
    }


}
export default withRouter(ConsultaLancamentos);