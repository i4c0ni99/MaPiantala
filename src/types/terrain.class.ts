import { Comment } from "./Comment.class";
import { User } from "./User.class";

export class Terrain {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public position: string,
        public slot: number,
        public isPublic: boolean,
        public user: User,
        public comments:Comment[]
    ) {

    }
}