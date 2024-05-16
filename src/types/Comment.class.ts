import { Answer } from "./Answer.class";
import { User } from "./User.class";

export class Comment{
    constructor( 
        public date:Date,
        public user:User,
        public content:string,
        public answers:Answer[]
    ){}
}