
import { Card } from "../components/card/Card.component";
import { getTerrainsMockByDistance } from "../mocks/getTerrains.mock";
import { Terrain } from "../types/terrain.class";
import { useState, useEffect } from 'react';
import { Button, IButton } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import { loggedIn } from "../utils/axiosInstance";
import { Copertine } from "./copertine";


export  function Home() {
    const [terrains, setTerrains] = useState<Terrain[]>([]);
    const [logged,setLoggedIn] =useState<boolean>()
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
                console.log(terrains)
                setTerrains(terrains);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoggedIn(await loggedIn())
        }
        fetchData();
    },[])
    if(logged) return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" ><a href="/terrain-upsert">+</a></button>

            <main className="pt-32 pl-2 pr-2 sm:size-11/12 lg:size-1/2 mx-auto">
                {terrains.map(
                    (terrain) =>
                        <div className="mt-8">
                            <Card terrainCard={terrain} Button={button}></Card>                                
                        </div>
                )
            }
            </main>
        </>
    );
    return <Copertine></Copertine>
}
