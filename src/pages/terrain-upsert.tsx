import { CreateEditTerrain } from "../components/create-edit-terrain/create-edit-terrain.component";
import { User } from "../types/User.class";
import { Terrain } from "../types/terrain.class";
export function TerrainUpsert() {
    return <>
        <div className="size-3/4 mx-auto">
            <CreateEditTerrain terrainCreated={new Terrain('', '', '', '', 0, false, new User('i4c0ni99@gmail.com', '', 'Gigi', 'Iaconi', 'i4c0ni99'))} onSubmission={(data: Terrain) => console.log("AA", data)}></CreateEditTerrain>
        </div>
    </>
}   