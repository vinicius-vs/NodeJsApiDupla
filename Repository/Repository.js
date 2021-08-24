import axios from "axios";

export class Repository{
    api_conect="http://192.168.0.141/api/";
    api;

    constructor(){
         this.api = axios.create({baseURL:this.api_conect})
    }
    create(model){
        this.api.post("",model).then(x => console.log(x.status));
    }
    read(){

    }
    read_by_id(id){

    }
    uptade(model){

    }
    delete(id){

    }
}
