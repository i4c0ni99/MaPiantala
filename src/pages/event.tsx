import { useEffect, useState } from "react";
import { EventCard } from "../components/event/event.component";
import { getEventsByDistance } from "../mocks/getEvents.mock";
import { Event } from "../types/Event.class";

export function EventPage() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const events: Event[] = await getEventsByDistance();
                setEvents(events);
                console.log(events)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36"><a href="/event-upsert">+</a></button>

            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
                {events.map((event) =>
                    <div className="mt-8">
                        <EventCard eventInCard={event} />
                    </div>
                )
                }

            </main>
        </>)
}   