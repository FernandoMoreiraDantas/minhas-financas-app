import React from "react";

import AuthService from "../app/service/authService";

import ApiService from "../app/apiservice";


export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

class ProvedorAutenticacao extends React.Component{

    state = {
        usuarioAutenticado:null,
        isAutenticado:false
    }

    iniciarSessao = (tokenDto) =>{
        const token = tokenDto.token
        AuthService.logar(tokenDto,token);
        this.setState({isAutenticado:true,usuarioAutenticado:tokenDto})
    }

    encerrarSessao = () =>{
        AuthService.removerUsuarioAutenticado();
        this.setState({isAutenticado: false, usuarioAutenticado: null})
    }


    componentDidMount(){
        const isAutenticado = AuthService.isUsuarioAutenticado();
        console.log("Usuario Autenticado?", isAutenticado);
        if(isAutenticado){
            const usuario = AuthService.refreshSesion();
            this.setState({
                isAutenticado:true,
                usuarioAutenticado:usuario
            })
        }
    }



    render(){
        const contexto = {
            usuarioAutenticado: this.state.usuarioAutenticado,
            isAutenticado: this.state.isAutenticado,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao
        }
        return(
            <AuthProvider value={contexto}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default ProvedorAutenticacao;