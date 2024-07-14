import { TerrainCard } from "../components/terrain-card/terrain-card.component";
import { getTerrainsByDistance } from "../services/terrains.service";
import { Terrain } from "../types/Terrain.class";
import { useState, useEffect } from "react";
import { Button, IButton } from "../components/button/button.component";
import { ButtonType } from "../components/button/button-types";
import { loggedIn } from "../utils/axiosInstance";
import { Copertine } from "./copertine";
import { getEventsByDistance } from "../services/events.service";
import { Event } from "../types/Event.class";
import { EventCard } from "../components/event-card/event-card.component";

const terrainEventsComparator = (p: Terrain | Event, q: Terrain | Event) => {
    return new Date(p.updatedAt).valueOf() - new Date(q.updatedAt).valueOf();
};

export function Home() {
    const [terrainEvents, setTerrainEvent] = useState<(Terrain | Event)[]>([]);
    const [logged, setLoggedIn] = useState<boolean>();
    const reserve = () => console.log("Prenotazione");
    const button: React.ReactElement<IButton> = (
        <Button
            style={ButtonType.Secondary}
            text={"Prenota"}
            onButtonClick={reserve}
        ></Button>
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrains: Terrain[] = await getTerrainsByDistance();
                const events: Event[] = await getEventsByDistance();

                const terrainEvents: Array<Terrain | Event> = [
                    ...terrains,
                    ...events,
                ].sort(terrainEventsComparator);

                setTerrainEvent(terrainEvents);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [terrainEvents]);

    useEffect(() => {
        const fetchData = async () => {
            setLoggedIn(await loggedIn());
        };
        fetchData();
    }, []);

    if (logged)
        return (
            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
                <div className="mt-8">
                    {terrainEvents.map((item: Terrain | Event) => {
                        if (item instanceof Terrain)
                            return <TerrainCard terrain={item}></TerrainCard>;
                        return <EventCard event={item}></EventCard>;
                    })}
                </div>
            </main>
        );
    return <Copertine></Copertine>;
}
