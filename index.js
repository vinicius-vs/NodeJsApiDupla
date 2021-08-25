import {TypeUserModel} from './Model/TypeUserModel.js';
import {UserModel} from './Model/UserModel.js';
import {PersonModel} from './Model/PersonModel.js';
import {PersonRepository} from "./Repository/PersonRepository.js";


let modeltypeUser = new TypeUserModel();
modeltypeUser.name = "john";
modeltypeUser.description = "meu nome não é jonh";

let modelUser = new UserModel();
modelUser.email = "john@john.dev";
modelUser.password ="123";
modelUser.TypeUser = modeltypeUser;

let modelPerson = new PersonModel();
modelPerson.firstName = "john";
modelPerson.lastName = "john";
modelPerson.birthDate = "2021-06-17";
modelPerson.document = "123";
modelPerson.User = modelUser;

let repository = new PersonRepository();


repository.create(modelPerson);
 //repository.delete();