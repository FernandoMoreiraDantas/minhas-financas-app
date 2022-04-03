import LocalStoregeService from "./localstoregeService";

export const USUARIO_LOGADO = '_usuario_logado';

export default  class AuthService{

    static isUsuarioAutenticado(){
        const usuario = LocalStoregeService.obterItem(USUARIO_LOGADO);
        return usuario && usuario.id;
    }

    static removerUsuarioAutenticado(){
        console.log('remover usuario logado');
        LocalStoregeService.removerItem(USUARIO_LOGADO);
    }

    static logar(usuario){
        LocalStoregeService.adicionarItem(USUARIO_LOGADO, usuario);
    }

    static obterusuarioAutenticado(){
        return localStorage.obterItem(USUARIO_LOGADO);
    }
}