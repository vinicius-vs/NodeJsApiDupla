import axios from "axios";
export class UserRepository{
    api_connect = "http://192.168.0.141/api/";
    api;
    constructor(){
        this.api = axios.create({baseURL:this.api_connect});
    }
    create(model){
        this.api.post("User",model).then(x => console.log(x.status));
    }
    async read(){
        return (await (this.api.get("User").then())).data;
    }
    async read_by_id(id){
        return (await (this.api.get(`User/${id}`).then())).data;
    }
    uptade(model){
        this.api.put(`User/${model.id}`,model).then(x => console.log(x.status));
    }
    delete(id){
        this.api.delete(`User/${id}`).then(x => console.log(x.status));
    }
}