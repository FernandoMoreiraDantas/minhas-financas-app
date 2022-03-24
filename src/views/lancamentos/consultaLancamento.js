import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-groups";
import SelectMenu from "../../components/select-menu";
import LancamentosTable from "./lancamentosTable";

class ConsultaLancamentos extends React.Component{

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

        const listaLancamentos = [
            {id:1,descricao:"Salário",valor:"5000",mes:1,tipo:"Receita",status:"Efetivado"},
            {id:2,descricao:"teste",valor:"450",mes:1,tipo:"Despesa",status:"Efetivado"}
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
                                    placeholder="Informe o Ano"
                                    name="ano" />
                            </FormGroup>
                            <br/>
                            <FormGroup label="Mês:" htmlFor="inputMes">
                                <SelectMenu id="inputMes" className="form-control" lista = {listaMeses}/>
                            </FormGroup>
                            <br/>
                            <FormGroup label="Tipo Lançamento:" htmlFor="inputTipo">
                                <SelectMenu id="inputTipo" className="form-control" lista = {listaTipo}/>
                            </FormGroup>
                            <br/>
                            <button className="btn btn-success">Buscar</button>
                            <button className="btn btn-danger">Cadastrar</button>                            
                            
                           
                        </fieldset>
                    </div>
                </div>
            </div>
            <br/> 
            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component">
                        <LancamentosTable lancamentos={listaLancamentos}/>
                    </div>
                </div>
            </div>
        </Card>


            
        )
    }


}
export default withRouter(ConsultaLancamentos);