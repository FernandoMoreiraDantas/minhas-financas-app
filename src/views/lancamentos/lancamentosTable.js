import React from "react";
import currencyFormatter from "currency-formatter";

export default props =>{

    const rows = props.lancamentos.map(Lancamento => {
        return(
            <tr key={Lancamento.id}>
                <td>{Lancamento.descricao}</td>
                <td>{currencyFormatter.format(Lancamento.valor,{locale:'pt-BR'})}</td>
                <td>{Lancamento.tipo}</td>
                <td>{Lancamento.mes}</td>
                <td>{Lancamento.status}</td>
                <td>
                    <button type="button" 
                            className="btn-primary"
                            onClick={e => props.editAction(Lancamento.id)}>   
                            Editar
                    </button>
                    &nbsp;
                    <button type="button" 
                            className="btn-danger" 
                            onClick={ e => props.deleteAction(Lancamento)} >
                                Deletar
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}