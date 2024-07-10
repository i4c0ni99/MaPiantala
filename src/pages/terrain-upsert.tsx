
import { CreateEditTerrain } from "../components/create-edit-terrain/create-edit-terrain.component";
import { Terrain } from "../types/terrain.class";
import { getTerrainById, postTerrain, updateTerrain } from "../mocks/getTerrains.mock";
import GeocodingService from "../services/geocoding.service";
import { getCookie } from "../services/MaPiantalaCookies.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function TerrainUpsert() {
    const { terrainId } = useParams()
    const [terrain, setTerrain] = useState<Terrain>(new Terrain(
        0,
        '',
        '',
        '',
        '',
        0,
        0,
        false,
        getCookie('user'),
        [],
        0.0,
        0.0,

    ))


    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrain: Terrain = await getTerrainById(terrainId);
                setTerrain(terrain)
                console.log(terrain)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])



    return (<>
        <div className="size-3/4 mx-auto pt-32">
            <CreateEditTerrain
                terrainCreated={
                    terrain
                }
                onSubmission={async (data: Terrain) => {
                    console.log(data.id)
                    if (data.id !== 0) {
                        const address = await GeocodingService.getCoordinates(data.address)
                        data.latitude = address.location.lat
                        data.longitude = address.location.lng
                        data.user = terrain.user
                        updateTerrain(data)
                        console.log('update', data)
                        window.location.href = '/terrain'
                    }else{
                    const address = await GeocodingService.getCoordinates(data.address)
                    data.latitude = address.location.lat
                    data.longitude = address.location.lng
                    data.user = terrain.user
                    console.log('bellissimoooo')
                    postTerrain(data)
                    window.location.href = '/terrain'
                    }
                }

                }>

            </CreateEditTerrain>
        </div >
    </>
    )

}

