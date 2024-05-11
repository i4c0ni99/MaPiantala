import { User } from "./User.class";

export class Event {


    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public eventdate: Date,
        public user: User
    ) {

    }
};