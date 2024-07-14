import { useEffect, useState } from "react";



import { Event } from "../types/Event.class";
import { Link } from "react-router-dom";
import { getEventsByDistance } from "../services/events.service";
import { EventAdminCard } from "../components/event-card-admin/event-card-admin";


export function EventAdminPage() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const events: Event[] = await getEventsByDistance();
                setEvents(events.filter((event) => !event.isPublic));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32">
                {events?.map((event) =>
                    <Link rel="stylesheet" to={`/admin-events/${event.id}`} key={event.id} >
                        <EventAdminCard event={event} />
                    </Link>
                )}
            </div>
        </>

    )
}