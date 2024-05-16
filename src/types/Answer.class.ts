import { User } from "./User.class";

export class Answer{
    constructor(
        public date:Date,
        public user:User,
        public content:string
    ){
        
    }
}