import { Plant } from "./Plant.class";

export class User {
  constructor(
    public email: string,
    public profilePicture: string,
    public firstName: string,
    public lastName: string,
    public username: string,
    public userPlants?: Plant[]
  ) {}
}
