
import { CreateEditTerrain } from "../components/create-edit-terrain/create-edit-terrain.component";
import { User } from "../types/User.class";
import { Terrain } from "../types/terrain.class";
import { postTerrain } from "../mocks/getTerrains.mock";
import GeocodingService from "../services/geocoding.service";

export function TerrainUpsert() {
    const terrain = new Terrain(
        0,
        '',
        '',
        '',
        '',
        0,
        0,
        false,

        new User(
            'i4c0ni99@gmail.com',
            '',
            'Gigi',
            'Iaconi',
            'i4c0ni99',

            '',

            'b1a1a87f5a7cbe62533df07e8df2fdee', 1),
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

