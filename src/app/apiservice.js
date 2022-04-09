import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL
console.log('Base URL:', baseURL);

const httpCliente = axios.create(
    {   
        baseURL:baseURL,withCredentials:true
    }

)

class ApiService{
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    static registrarToken(token){
        if(token){
            httpCliente.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }

    post(url,objeto){
        const requestURl = `${this.apiurl}${url}`       
        return httpCliente.post(requestURl,objeto);
    }

    put(url,objeto){
        const requestURl = `${this.apiurl}${url}`       
        return httpCliente.put(requestURl,objeto);
    }

    delete(url){
        const requestURl = `${this.apiurl}${url}`
        return httpCliente.delete(requestURl);
    }

    get(url){
        const requestURl = `${this.apiurl}${url}`
        return httpCliente.get(requestURl);
    }
}

export default ApiService;