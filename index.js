import {TypeUserModel} from './Model/TypeUserModel.js';
import {UserModel} from './Model/UserModel.js';
import { UserRepository } from "./Repository/UserRepository.js";

let modeltypeUser = new TypeUserModel();
modeltypeUser.name = "john";
modeltypeUser.description = "meu nome não é jonh";

let modelUser = new UserModel();
modelUser.email = "john@john.dev";
modelUser.password ="123"
modelUser.TypeUser = modeltypeUser;

let repository = new UserRepository();


repository.create(modelUser);
// repository.delete(23);