import ApiService from "../apiservice";
import ErroValidacao from "../exception/ErroValidacao";

class UsuarioService extends ApiService{
    constructor(){
        super('/api/usuarios')
    }

    autenticar(credencias){
        return this.post('/autenticar', credencias);
    }

    obterSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`);
    }


    salvar(usuario){
        return this.post('', usuario);
    }

    validar(usuario){
        const erros = []
        if(!usuario.nome){
            erros.push('O campo Nome é obrigatório.')
        }

        if(!usuario.email){
            erros.push('O campo E-mail é obrigatório.')
        }else if(!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            erros.push('Informe um e-mail válido.')
        }

        if(!usuario.senha){
            erros.push('Informe a Senha.')
        }

        if(!usuario.senhaRepeticao){
            erros.push('Informe a Confirmação de senha.')
        }


        if(usuario.senha && usuario.senhaRepeticao && usuario.senha !== usuario.senhaRepeticao){
            erros.push('As senhas não Conferem.')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}
export default UsuarioService;