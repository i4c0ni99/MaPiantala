import { Comment } from "./Comment.class";
import { User } from "./User.class";

export class Terrain {
    constructor(
        public id : number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public address: string,
        public slot: number,
        public terrainSize:number,
        public isPublic: boolean,
        public user: User,
        public comments:Comment[],
        public latitude: number,
        public longitude: number,
        public createdAt:Date,
        public updatedAt:Date
    ) {

    }
} 