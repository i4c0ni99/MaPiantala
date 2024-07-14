import { CreateEditEvent } from "../components/create-edit-event/create-edit-event.component";
import { Event } from "../types/Event.class";
import GeocodingService from "../services/geocoding.service";
import {
    getEventById,
    postEvent,
    updateEvent,
} from "../services/events.service";
import { EventCategory } from "../types/EventCategory.enum";
import { getCookie } from "../services/cookies.service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EventUpsert() {
    const { eventId } = useParams();
    const [event, setEvent] = useState<Event>(
        new Event(
            0,
            0,
            "",
            "",
            "",
            new Date(),
            getCookie("user"),
            [],
            "",
            false,
            0.0,
            0.0,
            EventCategory.GEOLOGICAL,
            new Date(),
            new Date()
        )
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const event: Event = await getEventById(eventId);

                setEvent(event);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [eventId]);

    return (
        <>
            <div className="size-3/4 mx-auto pt-32">
                <CreateEditEvent
                    eventCreated={event}
                    onSubmission={async (data: Event) => {
                        if (data.id !== 0) {
                            const address =
                                await GeocodingService.getCoordinates(
                                    data.address
                                );
                            data.latitude = address.location.lat;
                            data.longitude = address.location.lng;
                            data.isPublic = false;
                            const res = await updateEvent(data);
                            
                            window.confirm(res.statusText);
                        } else {
                            const address =
                                await GeocodingService.getCoordinates(
                                    data.address
                                );
                            data.latitude = address.location.lat;
                            data.longitude = address.location.lng;
                            data.owner = getCookie("user");
                            const res = await postEvent(data);

                            window.confirm(res.statusText);
                            window.location.href = "/event";
                        }
                    }}
                />
            </div>
        </>
    );
}
