import { useParams } from "react-router-dom";
import { Event } from "../types/Event.class";

import { useEffect, useState } from "react";



import { EventDetailAdminCard } from "../components/event-detail-admin/event-detail-admin";
import { getEventsByDistance } from "../mocks/getEvents.mock";

export function EventDetailAdminPage() {
    const { eventID } = useParams()
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
               const events: Event[] = await getEventsByDistance();
               setEvents(events);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="size-3/4 mx-auto pt-32">{
            events.map((event) => { if (event.id.toString() == eventID) return( 
               
                <EventDetailAdminCard event={event} /> 
                
        )})
        }
        </div>
    )

}
