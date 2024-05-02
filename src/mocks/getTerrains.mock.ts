import { Terrain } from "../types/terrain.class";

export function getTerrainsMock(): Promise<Terrain[]> {
    return new Promise((resolve) => {
        resolve([{
            title: "Title 1",
            description: "Description 1",
            imageUrl: "https://imageurl1.com",
            position: "Position 1",
            slot: 1,
            isPublic: true,
            user: {
                email: "user1@example.com",
                profilePicture: "https://profilepicture1.com",
                firstName: "John",
                lastName: "Doe",
                username: "johndoe"
            }
        },
        {
            title: "Title 2",
            description: "Description 2",
            imageUrl: "https://imageurl2.com",
            position: "Position 2",
            slot: 2,
            isPublic: false,
            user: {
                email: "user2@example.com",
                profilePicture: "https://profilepicture2.com",
                firstName: "Jane",
                lastName: "Smith",
                username: "janesmith"
            }
        }
        ]);
    });
}