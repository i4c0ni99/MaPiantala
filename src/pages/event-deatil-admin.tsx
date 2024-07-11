import { useParams } from "react-router-dom";
import { Event } from "../types/Event.class";

import { useEffect, useState } from "react";



import { EventDetailAdminCard } from "../components/event-detail-admin/event-detail-admin";
import { getEventById,  updateEvent } from "../mocks/getEvents.mock";

export function EventDetailAdminPage() {
    const { eventID } = useParams()
    const [event, setEvent] = useState<Event>( );

    useEffect(() => {
        const fetchData = async () => {
            try {
               const event: Event = await getEventById(eventID);
               setEvent(event);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="size-3/4 mx-auto pt-32">
                <EventDetailAdminCard event={event} onSubmission={(data:Event)=>{
                    console.log('Event:',data)
                    updateEvent(data)
                    window.location.href='/event'
                }
                }/> 
                
        
        </div>
    )

}
