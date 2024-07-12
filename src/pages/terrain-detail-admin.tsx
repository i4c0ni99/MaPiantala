import { useParams } from "react-router-dom";
import { Terrain } from "../types/terrain.class";

import { useEffect, useState } from "react";
import { getTerrainById, updateTerrain } from "../services/terrains.service";
import { TerrainDetailAdminCard } from "../components/detaill-terrain-admin/terrain-detail-admin";

export function TerrainDetailAdminPage() {
    const { terrainID } = useParams()

    const [terrain, setTerrain] = useState<Terrain>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrain: Terrain = await getTerrainById(terrainID);
                setTerrain(terrain)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [terrain]);


    return (
        <div className="size-3/4 mx-auto pt-32">
            <TerrainDetailAdminCard terrain={terrain} onSubmission={async (terrain: Terrain) => {
                console.log('Terrain:', terrain)
                updateTerrain(terrain)
                window.location.href = '/terrain'
            }} />
        </div>
    )

}
