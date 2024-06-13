import { Terrain } from "../types/terrain.class";

export function getTerrainsMock(): Promise<Terrain[]> {
  const user1 = {
    email: "john.doe@example.com",
    profilePicture:
      "https://www.viaggioff.it/wp-content/uploads/2022/07/Agriexperience-2-770x513.jpg",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "",
    isAdmin: false,
    copertinePicture: "",
  };

  const user2 = {
    email: "jane.smith@example.com",
    profilePicture:
      "https://www.viaggioff.it/wp-content/uploads/2022/07/Agriexperience-2-770x513.jpg",
    firstName: "Jane",
    lastName: "Smith",
    username: "janesmith",
    password: "",
    isAdmin: false,
    copertinePicture: "",
  };

  // Definizione della struttura di una risposta (Answer)
  const answer1 = {
    date: new Date("2024-05-10T12:30:00Z"),
    user: user1,
    content: "This is an answer by John Doe.",
  };

  const answer2 = {
    date: new Date("2024-05-11T09:45:00Z"),
    user: user2,
    content: "Here is a response from Jane Smith.",
  };

  // Definizione della struttura del commento principale
  const mainComment = {
    date: new Date("2024-05-09T15:20:00Z"),
    user: user1,
    content: "This is the main comment content.",
    answers: [answer1, answer2],
  };

  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        title: "Terreno caposaldo",
        description: "Description 1",
        imageUrl: "https://placeholder.com/500x500",
        position: "Via Giacomo caldora ,L'aquila",
        slot: 1,
        terrainSize: 1000,
        isPublic: true,
        user: {
          email: "user1@example.com",
          profilePicture: "https://placeholder.com/200x200",
          firstName: "John",
          lastName: "Doe",
          password: " ",
          username: "johndoe",
          isAdmin: false,
          copertinePicture: "",
        },
        comments: [mainComment],
      },

      {
        id: 2,
        title: "Banane express",
        description:
          "Terreno rigloglioso che ha dato sempre i suoi frutti dalle piccole dimensioni e dalla terra morbida,di conseguenza puo essere facilmente lavorato senza l'uso di macchinari agricoli  ",
        imageUrl: "https://placeholder.com/500x500",
        position: "Via Genova 48 Giulianova",
        slot: 1,
        terrainSize: 2000,
        isPublic: true,
        user: {
          email: "user1@example.com",
          profilePicture: "https://placeholder.com/200x200",
          firstName: "Jane",
          lastName: "Smith",
          username: "janesmith",
          isAdmin: false,
          copertinePicture: "",
        },
        comments: [mainComment],
      },
    ]);
  });
}
