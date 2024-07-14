export class User {
    constructor(
        public id : number,
        public email: string,
        public profilePicture: string,
        public firstName: string,
        public lastName: string,
        public password: string,
        public passwordConfirm: string,
        public role: string,
        public copertinePicture: string,
    ) { }
}