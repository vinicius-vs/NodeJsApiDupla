import axios from "axios";

export class BaseRepository{
    #api_connect="http://192.168.0.141/api/";
    #api;
    #endpoint;

    constructor(endpoint){
        this.#endpoint = endpoint;
        this.#api = axios.create({baseURL:this.#api_connect});
    }
    create(model){
        this.#api.post(this.#endpoint,model).then(x => console.log(x.status));
    }
    async read(){
        return (await (this.#api.get(this.#endpoint).then())).data;
    }
    async read_by_id(id){
        return (await (this.#api.get(`${this.#endpoint}/${id}`).then())).data;
    }
    uptade(model){
        this.#api.put(`${this.#endpoint}/${model.id}`,model).then(x => console.log(x.status));
    }
    delete(id){
        this.#api.delete(`${this.#endpoint}/${model.id}`).then(x => console.log(x.status));
    }
}