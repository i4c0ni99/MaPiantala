import { useEffect, useState } from "react";
import { EventCard } from "../components/event-card/event-card.component";
import { getEventsByDistance } from "../services/events.service";
import { Event } from "../types/Event.class";
import { Link } from "react-router-dom";

export function EventPage() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const events: Event[] = await getEventsByDistance();
                setEvents(events.filter((event) => event.isPublic));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <Link rel="stylesheet" to="/event-upsert">
                <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 lg:right-36 right-4">+</button>
            </Link>
            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
                {events.map((event) =>
                    <div className="mt-8">
                        <EventCard event={event} />
                    </div>
                )
                }

            </main>
        </>)
}   