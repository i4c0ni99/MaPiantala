


export class User {
    constructor(
        public id : number,
        public email: string,
        public profilePicture: string,
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public isAdmin: boolean,
        public copertinePicture: string,
        public passwordConfirm : string
    ) { }
}