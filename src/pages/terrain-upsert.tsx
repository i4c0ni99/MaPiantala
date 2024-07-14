import { CreateEditTerrain } from "../components/create-edit-terrain/create-edit-terrain.component";
import {
    getTerrainById,
    postTerrain,
    updateTerrain,
} from "../services/terrains.service";
import GeocodingService from "../services/geocoding.service";
import { getCookie } from "../services/cookies.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Terrain } from "../types/Terrain.class";

export function TerrainUpsert() {
    const { terrainId } = useParams();
    const [terrain, setTerrain] = useState<Terrain>(
        new Terrain(
            0,
            "",
            "",
            "",
            "",
            0,
            0,
            false,
            getCookie("user"),
            [],
            0,
            0,
            new Date(),
            new Date()
        )
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrain = await getTerrainById(terrainId);
                terrain && setTerrain(terrain);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="size-3/4 mx-auto pt-32">
                <CreateEditTerrain
                    terrainCreated={terrain}
                    onSubmission={async (data: Terrain) => {
                        console.log(data.id);
                        if (data.id !== 0) {
                            const address =
                                await GeocodingService.getCoordinates(
                                    data.address
                                );
                            data.latitude = address.location.lat;
                            data.longitude = address.location.lng;
                            data.isPublic = false;
                            updateTerrain(data);
                            console.log("update", data);
                            window.location.href = "/terrain";
                        } else {
                            const address =
                                await GeocodingService.getCoordinates(
                                    data.address
                                );
                            data.latitude = address.location.lat;
                            data.longitude = address.location.lng;
                            data.user = terrain.user;
                            postTerrain(data);
                            window.location.href = "/terrain";
                        }
                    }}
                ></CreateEditTerrain>
            </div>
        </>
    );
}
