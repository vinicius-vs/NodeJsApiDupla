import axios from "axios";

export class PersonRepository{
    api_conect="http://192.168.0.141/api/";
    api;

    constructor(){
         this.api = axios.create({baseURL:this.api_conect})
    }
    create(model){
        this.api.post("Person",model).then(x => console.log(x.status));
    }
    async read(){
        return  await (this.api.get("Person").then()).data;
    }
    read_by_id(id){
        return await (this.api.get(`Person/${id}`).then()).data;
    }
    uptade(model){
        this.api.put(`Person/${model.id}`,model).then(x => console.log(x.status));
    }
    delete(id){
        this.api.delete(`Person/${model.id}`).then(x => console.log(x.status))
    }
}
