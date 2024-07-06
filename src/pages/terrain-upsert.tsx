
import { CreateEditTerrain } from "../components/create-edit-terrain/create-edit-terrain.component";
import { Terrain } from "../types/terrain.class";
import { postTerrain } from "../mocks/getTerrains.mock";
import GeocodingService from "../services/geocoding.service";
import { useContext } from "react";
import { MyContext } from "../services/MyContext";

export function TerrainUpsert() {

    const userContext = useContext(MyContext).data.user
    const terrain = new Terrain(
        0,
        '',
        '',
        '',
        '',
        0,
        0,
        false,
        userContext,
        [],
        0.0,
        0.0,

    )


    return (<>
        <div className="size-3/4 mx-auto pt-32">

            <CreateEditTerrain
                terrainCreated={
                    terrain
                }
                //JSON.stringify(data)
                onSubmission={async (data: Terrain) => {
                    console.log(data.address)
                    const address = await GeocodingService.getCoordinates(data.address)
                    data.latitude = address.location.lat
                    data.longitude = address.location.lng
                    console.log(data)
                postTerrain(data)


                }

                }>

            </CreateEditTerrain>
        </div >
    </>
    )

}   

