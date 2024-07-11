import { User } from "./User.class";
import { Comment } from "./Comment.class";
import { EventCategory } from "./EventCategory.enum";
export class Event {



    constructor(
        public id:number,
        public partecipantsNumer: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public scheduledDate: Date,
        public owner: User,
        public comments: Comment[],
        public address: string,
        public isPublic: boolean,
        public latitude:number,
        public longitude:number,
        public category: EventCategory

    ) {

    }
};

