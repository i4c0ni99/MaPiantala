import { useEffect, useState } from "react";



import { Event} from "../types/Event.class";
import { Link } from "react-router-dom";
import { getEventsByDistance } from "../mocks/getEvents.mock";
import { EventAdminCard } from "../components/event-card-admin/event-card-admin";


export function EventAdminPage() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const events: Event[] = await getEventsByDistance();
                setEvents(events.filter((event)=> !event.isPublic ));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" ><a href="/create-plant">+</a></button>
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32"> 
                {events?.map((event) =>
                    <Link rel="stylesheet" to={`/admin-events/${event.id}`} key={event.id} >
                        <EventAdminCard event={event}/>
                    </Link>
                )}
            </div>
        </>

    )
}