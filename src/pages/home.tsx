
import { Card } from "../components/card/Card.component";
import { getTerrainsMockByDistance } from "../services/terrains.service";
import { Terrain } from "../types/terrain.class";
import { useState, useEffect } from 'react';
import { Button, IButton } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import { loggedIn } from "../utils/axiosInstance";
import { Copertine } from "./copertine";
import { getEventsByDistance } from "../services/events.service";
import { Event } from "../types/Event.class";
import { EventCard } from "../components/event/event.component";
 



export function Home() {
    interface terrainType {
        type: 'terrain',
        terrain: Terrain
    }
    interface eventType {
        type: 'event',
        event: Event
    }

    const [terrain_events, setTerrainEvent] = useState<(terrainType | eventType)[]>([])
    const terrainsType: terrainType[] = []
    const eventsType: eventType[] = []
    const [logged, setLoggedIn] = useState<boolean>()
    const reserve = () => console.log("Prenotazione");
    const button: React.ReactElement<IButton> = (
        <Button
            style={ButtonType.Secondary}
            text={"Prenota"}
            onButtonClick={reserve}
        >
        </Button>
    );


    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrains: Terrain[] = await getTerrainsMockByDistance();
                const events: Event[] = await getEventsByDistance()
            if(terrain_events.length == 0){
                terrains.forEach((terrain) => {
                    console.log(terrain)
                    if(terrain.isPublic)
                    terrainsType.push({
                    type: 'terrain',
                    terrain: terrain
                })})

                events.forEach((event) =>{
                    console.log(event)
                    if(event.isPublic)
                    eventsType.push({
                    type: 'event',
                    event: event
                })})
                            
                setTerrainEvent(shuffleArray([...terrainsType,...eventsType]))
              
            }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [terrain_events]);

    useEffect(() => {
        const fetchData = async () => {
            setLoggedIn(await loggedIn())
        }
        fetchData();
    }, [])

    const shuffleArray = (array: (terrainType|eventType)[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

    if (logged) return (
        
            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
                {terrain_events.map(
                    (terrainEvent) => {
                        console.log(terrainEvent.type ,'==' )
                        if (terrainEvent.type == 'terrain'){
                            console.log(terrainEvent.type,'=',terrainEvent)
                            return (
                            <div className="mt-8">
                                <Card terrainCard={terrainEvent.terrain} Button={button}></Card>
                            </div>)
                        }
                        if (terrainEvent.type == 'event') { 
                            console.log(terrainEvent.type,'=',terrainEvent)
                            return(
                                <div className="mt-8">
                                <EventCard eventInCard={terrainEvent.event} />
                            </div>
                            ) 
                        }
                    }
                )}
            </main>
    );
    return <Copertine></Copertine>
}
