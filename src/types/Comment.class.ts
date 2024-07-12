
import { User } from "./User.class";

export class Comment{
    constructor( 
        public createdAt:Date,
        public user:User,
        public text:string,
    ){}
}