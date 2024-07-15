import { useEffect, useState } from "react";
import { Profile } from "../components/profile/profile.component";
import { Terrain } from "../types/Terrain.class";
import { getTerrainsByUser } from "../services/terrains.service";
import { getCookie } from "../services/cookies.service";
import { TerrainCard } from "../components/terrain-card/terrain-card.component";
import { getEventsByDistance } from "src/services/events.service";
import { Event } from "../types/Event.class"
import { EventCard } from "src/components/event-card/event-card.component";


const terrainEventsComparator = (p: Terrain | Event, q: Terrain | Event) => {
    return new Date(p.updatedAt).valueOf() - new Date(q.updatedAt).valueOf();
};

export function ProfilePage() {
    const [terrainEvents, setTerrainEvent] = useState<(Terrain | Event)[]>([]);
    const user = getCookie('user')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrains: Terrain[] = await getTerrainsByUser(user.id);
                const events: Event[] = await getEventsByDistance();

                const terrainEvents: Array<Terrain | Event> = [
                    ...terrains,
                    ...events.filter((event => event.owner.id == user.id)),
                ].sort(terrainEventsComparator);

                setTerrainEvent(terrainEvents);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [terrainEvents]);

    return (
        <>
            <div className="h-96 w-full">
                <Profile user={user}></Profile>
            </div>

            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
                <div className="mt-8">
                    {terrainEvents.map((item: Terrain | Event) => {
                        if (item instanceof Terrain)
                            return (
                                <div className="mt-10">
                                    <TerrainCard terrain={item}></TerrainCard>
                                </div>
                            )
                        return (
                            <div className="mt-10">
                                <EventCard event={item}></EventCard>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );

}
