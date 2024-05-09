import { Event } from "../types/Event.class";

export function getEventsMock(): Promise<Event[]> {
    return new Promise((resolve) => {
        resolve([
            {
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                imageUrl: "https://placeholder.com/500x500",
                date: new Date(),
                user: {
                    email: "john.doe@example.com",
                    profilePicture: "https://placeholder.com/200x200",
                    firstName: "John",
                    lastName: "Doe",
                    username: "johndoe",
                    password: " "
                }
            },
            {
                title: "Dolor Sit",
                description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                imageUrl: "https://placeholder.com/600x400",
                date: new Date(),
                user: {
                    email: "jane.smith@example.com",
                    profilePicture: "https://placeholder.com/250x250",
                    firstName: "Jane",
                    lastName: "Smith",
                    username: "janesmith",
                    password: " "
                }
            }
        ]);
    });
}