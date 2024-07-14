import { useEffect, useState } from "react";



import { Terrain } from "../types/terrain.class";
import { getTerrainsMockByDistance } from "../services/terrains.service";
import { TerrainAdminCard } from "../components/terrain-card-admin/terrain-card-admin";
import { Link } from "react-router-dom";


export function TerrainAdminPage() {

    const [terrains, setTerrains] = useState<Terrain[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrains: Terrain[] = await getTerrainsMockByDistance();
                setTerrains(terrains.filter((terrain) => !terrain.isPublic));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32">
                {terrains?.map((terrain) =>
                    <Link rel="stylesheet" to={`/admin-terrains/${terrain.id}`} key={terrain.id} >
                        <TerrainAdminCard terrain={terrain} />
                    </Link>
                )}
            </div>
        </>

    )
}