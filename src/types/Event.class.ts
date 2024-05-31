import { User } from "./User.class";
import { Comment } from "./Comment.class";
export class Event {



    constructor(
        public id:number,
        public partecipantsNumer: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public date: Date,
        public user: User,
        public comments: Comment[],
        public position: string,
        public isPublic: boolean

    ) {

    }
};