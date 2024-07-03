
import { Card } from "../components/card/Card.component";
import { getTerrainsMockByDistance } from "../mocks/getTerrains.mock";
import { Terrain } from "../types/terrain.class";
import { useState, useEffect } from 'react';
import { Button, IButton } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import location from "../utils/location";



export function TerrainPage() {
    const [terrains, setTerrains] = useState<Terrain[]>([]);

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
                const terrains: Terrain[] = await getTerrainsMockByDistance(location    );
                setTerrains(terrains);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" ><a href="/terrain-upsert">+</a></button>

            <main className="pt-32 w-6/12 mx-auto">
                {terrains.map(
                    (terrain) =>
                        <div className="mt-8">
                            <Card terrainCard={terrain} Button={button}></Card>                                
                        </div>
                )}
            </main>
        </>
    );
}
