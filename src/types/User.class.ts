


export class User {
    constructor(
        public email: string,
        public profilePicture: string,
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public isAdmin: boolean,
        public copertinePicture: string
    ) { }
}