
import { Comment } from "../types/Comment.class";
import { Event } from "../types/Event.class";
import { axiosInstance } from "../utils/axiosInstance";
import location from "../utils/location";

export async function getEventsByDistance(): Promise<Event[]> {
    const result = await axiosInstance.get(`/event/lat/${location.lat}/lon/${location.lng}/distance/1000`)
    return result.data
}

export async function getCommentsbyEvent(id: string): Promise<Comment[]> {
    const result = await axiosInstance.get(`/comment/event/${id}`)
    return result.data
}

export async function postEvent(event: Event) {
    await axiosInstance.post('/event', {
        "title": event.title,
        "description": event.description,
        "scheduledDate": event.scheduledDate,
        "address": event.address,
        "latitude": event.latitude,
        "longitude": event.longitude,
        "imageUrl": event.imageUrl,
        "isPublic": false,
        "category": event.category,
        "userId": event.owner.id
    });
}

export async function getEventById(id?: string): Promise<Event> {
    const result = await axiosInstance.get(`/event/${id}`)
    return result.data
}

export async function updateEvent(event: Event) {
    await axiosInstance.patch(`/event/${event.id}`, {
        "title": event.title,
        "description": event.description,
        "scheduledDate": event.scheduledDate,
        "address": event.address,
        "latitude": event.latitude,
        "longitude": event.longitude,
        "imageUrl": event.imageUrl,
        "isPublic": event.isPublic,
        "category": event.category,
        "userId": event.owner.id
    });
}
