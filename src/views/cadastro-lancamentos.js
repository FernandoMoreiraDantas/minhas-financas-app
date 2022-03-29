import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-groups";
import SelectMenu from "../components/select-menu";
import { withRouter } from "react-router-dom";
import LancamentoService from "../app/service/lancamentoService";

class CadastroLancamentos extends React.Component {

    constructor(){
        super();
        this.service = new LancamentoService();
    }
    render() {
        const listaTipos = this.service.obterListaTipos();
        const listaMeses = this.service.obterListaMeses();

        return (
            <Card title="Cadastro de Lançamentos">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input type="text" id="inputDescricao" className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input type="text" id="inputAno" className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" lista={listaMeses} className="form-control"/>
                        </FormGroup>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputvalor" label="Valor: *">
                            <input type="text" id="inputvalor" className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                           <SelectMenu id="inputTipo" lista={listaTipos} className="form-control"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: *">
                          <input type="text" id="inputStatus" className="form-control" disabled />
                        </FormGroup>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-success">Salvar</button>
                        <button className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamentos);