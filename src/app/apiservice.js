import axios from "axios";

const httpCliente = axios.create(
    {
        baseURL:'http://192.168.1.6:8080'
    }

)

class ApiService{
    constructor(apiurl){
        this.apiurl = apiurl;
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