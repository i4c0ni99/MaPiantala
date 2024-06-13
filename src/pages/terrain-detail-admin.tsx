import { useParams } from "react-router-dom";
import { Terrain } from "../types/Terrain.class";

import { useEffect, useState } from "react";
import { getTerrainsMock } from "../mocks/getTerrains.mock";
import { TerrainDetailAdminCard } from "../components/detaill-terrain-admin/terrain-detail-admin";

export function TerrainDetailAdminPage() {
    const { terrainID } = useParams()
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
    //terrains.filter((terrain) => terrain.id.toString() === terrainID)
    return (
        <div className="size-3/4 mx-auto pt-32">
            <TerrainDetailAdminCard terrain={terrains.find(terrain => terrain.id.toString() === terrainID)} />
        </div>
    )

}
