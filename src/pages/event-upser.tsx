import { CreateEditEvent } from "../components/create-edit-event/create-edit-event.component";
import { Event } from "../types/Event.class";
import GeocodingService from "../services/geocoding.service";
import { getEventById, postEvent, updateEvent } from "../mocks/getEvents.mock";
import { EventCategory } from "../types/EventCategory.enum";
import { getCookie } from "../services/MaPiantalaCookies.service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EventUpsert() {
    const { eventId } = useParams()
    const [event,setEvent] = useState<Event>(new Event(0,0,'','','',new Date(),getCookie('user'),[],''
,false,0.0,0.0,EventCategory.GEOLOGICAL))


    useEffect(() => {
        const fetchData = async () => {
            try {
                const event: Event = await getEventById(eventId);
                setEvent(event)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[])
  
    return <>
        <div className="size-3/4 mx-auto pt-32">
            <CreateEditEvent
                eventCreated={
                   event
                }
                onSubmission={async (data: Event) => {
                    if(data.id != 0 ){
                        const address = await GeocodingService.getCoordinates(data.address)
                        data.latitude = address.location.lat
                        data.longitude = address.location.lng
                        data.user=event.user
                        updateEvent(data)
                        window.location.href = '/terrain'
                    }
                    const address = await GeocodingService.getCoordinates(data.address)
                    data.latitude = address.location.lat
                    data.longitude = address.location.lng
                    await postEvent(data)
                    window.location.href='/event'
                }} />

        </div>


    </>
  
}
