import { BaseRepository } from "./BaseRepository.js";

export class UserRepository extends BaseRepository{
    constructor(){
        super("User");
    }
}