import { UserModel } from "./UserModel.js";
export class PersonModel{
    id;
    firstName;
    lastName;
    birthDate;
    document;
    User = UserModel;
} 