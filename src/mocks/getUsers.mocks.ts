import { User } from "../types/User.class";

export function getUsersMock(): Promise<User[]> {
  return new Promise((resolve) => {
    resolve([
      {
        id:1,
        email: "mario.rossi@gmail.com",
        firstName: "Mario",
        lastName: "Rossi",
        username: "marioR",
        password: "lolalala",
        isAdmin: true,
        profilePicture: "",
        copertinePicture: "",
        passwordConfirm: " "
      },
    ]);
  });
}
