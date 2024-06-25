
import { CreateEditTerrain } from "../components/create-edit-terrain/create-edit-terrain.component";
import { User } from "../types/User.class";
import { Terrain } from "../types/terrain.class";
import { APIProvider } from "@vis.gl/react-google-maps";
import { GeocodingService } from "../services/geocoding.service";
import { useEffect, useState } from "react";

export function TerrainUpsert() {
    const [terrain, setTerrain] = useState<Terrain>(new Terrain(
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

            'b1a1a87f5a7cbe62533df07e8df2fdee',1),
        [],
        0.0,
        0.0,
        
    )
    )

  
    return (<>
        <div className="size-3/4 mx-auto pt-32">

            <CreateEditTerrain
                terrainCreated={
                    terrain
                }
                //JSON.stringify(data)
                onSubmission={(data: Terrain) => {
                    setTerrain(data)
                }}>

            </CreateEditTerrain>
            {terrain.address &&
                (
                <APIProvider apiKey={"AIzaSyDmRC46vKa33hycgqlvbMMzZifuvohGgj4"} onLoad={() => console.log('Maps API has loaded.')}>
                    <GeocodingService obj={terrain} ></GeocodingService>
                </APIProvider>
                )

            }
            

        </div >
    </>
    )
    
}   