import { Button } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import { Card } from "../components/card/Card.component";
import { getTerrainsMock } from "../mocks/getTerrains.mock";
import { Terrain } from "../types/terrain.class";
import { useState, useEffect } from 'react';

export function Home() {
    const [terrains, setTerrains] = useState<Terrain[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrains: Terrain[] = await getTerrainsMock();
                setTerrains(terrains);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const cardButton = (
        <Button
            text="Prenota"
            style={ButtonType.Accent}
            onButtonClick={() => console.log("fu")}
        />
    );

    return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36">+</button>

            <main className="w-6/12 mx-auto">
                {terrains.map(
                    (terrain) =>
                        <div className="mt-8">
                            <Card terrainCard={terrain}
                            ></Card>
                        </div>
                )}
            </main>
        </>
    );
}
