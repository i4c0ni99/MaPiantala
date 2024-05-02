import { CreateEditTerrain, Terrain } from "../components/create-edit-terrain/create-edit-terrain.component";

export function TerrainUpsert() {
    return <>
        <div className="size-3/4 mx-auto">
            <CreateEditTerrain title={"Example"} position={""} slot={0} description={""} isPublic={false} onSubmission={(data: Terrain) => console.log("AA", data)}></CreateEditTerrain>
        </div>
    </>
}   