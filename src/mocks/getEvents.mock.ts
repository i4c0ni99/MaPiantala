
import { Comment } from "../types/Comment.class";
import { Event } from "../types/Event.class";
import { axiosInstance} from "../utils/axiosInstance";
import location from "../utils/location";





export async function getEventsByDistance(): Promise<Event[]> {
    console.log(location)
   const result = await axiosInstance.get(`/event/lat/${location.lat}/lon/${location.lng}/distance/1000`)
   return result.data
}
export async function getCommentsbyEvent(id:number):Promise<Comment[]> {
    const result = await axiosInstance.get(`comment/event/${id}`)
    return result.data
}

export async function postEvent(event :Event) {
    console.log("event post",event)
    await axiosInstance.post('/event', {
        "title": event.title,
        "description": event.description,
        "scheduledDate" : event.scheduledDate,
        "address": event.address,
        "latitude": event.latitude,
        "longitude": event.longitude,
        "imageUrl": event.imageUrl,
        "isPublic": false,
        "category": event.category,
        "userId": event.user.id

    })
}

export async function getEventById(id?:string) : Promise<Event>{
   return await axiosInstance.get(`/event/${id}`)
}
export async function updateEvent(event:Event){
    await axiosInstance.patch('/event', {
        "title": event.title,
        "description": event.description,
        "scheduledDate" : event.scheduledDate,
        "address": event.address,
        "latitude": event.latitude,
        "longitude": event.longitude,
        "imageUrl": event.imageUrl,
        "isPublic": false,
        "category": event.category,
        "userId": event.user.id

    })
}
/* import { Event } from "../types/Event.class";

export function getEventsMock(): Promise<Event[]> {
    const user1 = {
        id:0,
        email: 'john.doe@example.com',
        profilePicture: 'https://www.viaggioff.it/wp-content/uploads/2022/07/Agriexperience-2-770x513.jpg',
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        password: '',
        isAdmin: false,
        copertinePicture: "",
        passwordConfirm: " "
        
        
        
    };

    const answer1 = {
        date: new Date('2024-05-10T12:30:00Z'),
        user: user1,
        content: 'This is an answer by John Doe.'
    };
    const answer2 = {
        date: new Date('2024-05-11T09:45:00Z'),
        user: user1,
        content: 'Here is a response from Jane Smith.'
    };

    const mainComment = {
        date: new Date('2024-05-09T15:20:00Z'),
        user: user1,
        content: 'This is the main comment content.',
        answers: [answer1, answer2]
    };

  
    return new Promise((resolve) => {
        resolve([
            {
                id:1,
                partecipantsNumer: 25,
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                imageUrl: "https://placeholder.com/500x500",
                date: new Date(),
                position :" Via Corrado IV",
                comments: [mainComment],
                user: {
                    id:1,
                    email: "john.doe@example.com",
                    profilePicture: "https://placeholder.com/200x200",
                    firstName: "John",
                    lastName: "Doe",
                    username: "johndoe",
                    password: "johnnie",
                    isAdmin: false,
                    copertinePicture: "",
                    passwordConfirm: " "
                },
                isPublic:false
              
                },
               
            {
                id:2,
                partecipantsNumer : 10,
                title: "Dolor Sit",
                description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                imageUrl: "https://placeholder.com/600x400",
                date: new Date(),
                position :" Via Corrado IV",
                user: {
                    id: 2,
                    email: "jane.smith@example.com",
                    profilePicture: "https://placeholder.com/250x250",
                    firstName: "Jane",
                    lastName: "Smith",
                    username: "janesmith",
                    password: "jackie",
                    isAdmin: false,
                    copertinePicture: " ",
                    passwordConfirm: " "
                }, comments: [mainComment],
                isPublic:false

                },


        ]);
    });
} */