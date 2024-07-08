import { Terrain } from "../../types/terrain.class"

interface ITerrainCardAdmin {
    terrain: Terrain
}

export const TerrainAdminCard: React.FC<ITerrainCardAdmin> = function ({ terrain }) {
    return (<div className="card w-96 bg-base-300 shadow-xl">
        <figure ><img className=" w-96 h-44" src={terrain.imageUrl} /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {terrain.user.email}
            </h2>
            <p>{terrain.title}</p>
            <div className="card-actions justify-end w-80 h-32">
                <p>
                    {terrain.description}
                </p>
            </div>
        </div>
    </div>)
}