
import { Card } from "../components/card/Card.component";
import { getTerrainsMockByDistance } from "../services/terrains.service";
import { Terrain } from "../types/terrain.class";
import { useState, useEffect } from 'react';
import { Button, IButton } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import { Link } from "react-router-dom";
import { getCookie } from "../services/MaPiantalaCookies.service";


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
                const terrains: Terrain[] = await getTerrainsMockByDistance();
                if (await getCookie('user'))
                    setTerrains(terrains.filter((terrain) => terrain.isPublic));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Link rel="stylesheet" to={`/terrain-upsert/`}  >
                <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" >+</button>
            </Link>


            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
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
