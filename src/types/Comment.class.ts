
import { User } from "./User.class";

export class Comment {
    constructor(
        public id: number,
        public createdAt:Date,
        public user:User,
        public text:string,
    ){}
}