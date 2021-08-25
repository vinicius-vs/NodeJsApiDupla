import axios from "axios";

export class TypeUserRepository{
    api_connect="http://192.168.0.141/api/";
    api;

    constructor(){
        this.api = axios.create({baseURL:this.api_connect})
    }

    create(model){
        this.api.post("TypeUser", model).then((x) => console.log(x.status))
    }

    async Read(){
        return (await(this.api.get("TypeUser").then())).data
    }

    async ReadById(id){
        return (await(this.api.get(`TypeUser/${id}`).then())).data
    }
    uptade(model){
        this.api.put(`TypeUser/${model.id}`,model).then(x => console.log(x.status));
    }
    delete(id){
        this.api.delete(`TypeUser/${id}`).then(x => console.log(x.status));
    }
}