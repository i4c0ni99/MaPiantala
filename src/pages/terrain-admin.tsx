import { useEffect, useState } from "react";



import { Terrain } from "../types/Terrain.class";
import { getTerrainsMock } from "../mocks/getTerrains.mock";
import { TerrainAdminCard } from "../components/terrain-card-admin/terrain-card-admin";
import { Link } from "react-router-dom";


export function TerrainAdminPage() {
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

    return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" ><a href="/create-plant">+</a></button>
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32"> 
                {terrains.map((terrain) =>
                    <Link rel="stylesheet" to={`/admin-terrains/${terrain.id}`} key={terrain.id} >
                        <TerrainAdminCard terrain={terrain}/>
                    </Link>
                )}
            </div>
        </>

    )
}