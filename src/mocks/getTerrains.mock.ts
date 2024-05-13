import { Terrain } from "../types/terrain.class";

export function getTerrainsMock(): Promise<Terrain[]> {
    return new Promise((resolve) => {
        resolve([{
            title: "Title 1",
            description: "Description 1",
            imageUrl: "https://placeholder.com/500x500",
            position: "Position 1",
            slot: 1,
            isPublic: true,
            user: {
                email: "user1@example.com",
                profilePicture: "https://placeholder.com/200x200",
                firstName: "John",
                lastName: "Doe",
                username: "johndoe",
                copertinePicture: "",
            }
        },
        {
            title: "Title 2",
            description: "Description 2",
            imageUrl: "https://placeholder.com/500x500",
            position: "Position 2",
            slot: 2,
            isPublic: false,
            user: {
                email: "user2@example.com",
                profilePicture: "https://placeholder.com/200x200",
                firstName: "Jane",
                lastName: "Smith",
                username: "janesmith",
                copertinePicture: ""
            }
        }
        ]);
    });
}