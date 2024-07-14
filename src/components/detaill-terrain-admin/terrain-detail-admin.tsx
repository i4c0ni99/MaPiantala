






import { Terrain } from "../../types/Terrain.class"

import { MapCard } from "../map-for-card/map-card";
import { ChangeEvent, FormEvent, useState } from "react";



interface ICardTErrainDetailAdmin {
    terrain?: Terrain
    onSubmission?: (data: Terrain) => void;
}

export const TerrainDetailAdminCard: React.FC<ICardTErrainDetailAdmin> = function ({ terrain, onSubmission }) {

    const [slots] = useState<number[]>([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])



    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (terrain)
            terrain.slot = parseInt(e.target.value)
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create a new Terrain instance with the form data
        if (terrain) {
            document.getElementsByName("select").values
            terrain.isPublic = true
            if (onSubmission)
                onSubmission(terrain)
        }


        // Optional callback on submission

    };
    if (terrain)
        return (
            <div className="card lg:card-side bg-base-300 shadow-xl">

                <figure className="h-72 w-64 lg:size-96 mt-8 mx-6">
                    <MapCard obj={terrain as Terrain}>
                    </MapCard>
                </figure>
                <div className="card-body size-1/2">
                    <div className="avatar">
                        <div className="-ml-4 lg:w-14 rounded-full">
                            <img src={terrain.user.profilePicture ? terrain.user.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"} />
                        </div>
                        <h1 className=" lg:mt-12 ml-4">{terrain.user.email}</h1>
                    </div>


                    <h1 className="card-title w-52">{terrain.title}</h1>
                    <h4 className="w-52">{terrain.address}</h4>
                    <p className="w-52">{terrain.description}</p>
                    <form className="w-full" onSubmit={handleSubmit} >
                        <label className="form-control w-full max-w-xs">
                            <div className="label w-64">
                                <span className=" font-bold">
                                    Terreno di {terrain.terrainSize} m² da dividere in slot
                                </span>
                            </div>
                            <select name="select" value={terrain.slot} className="select select-accent w-full max-w-xs" onChange={handleChange}>
                                {slots.map((s) =>
                                    <option key={s} value={s}>
                                        {s}
                                    </option>)

                                }
                            </select>
                        </label>
                        <div className="card-actions justify-end">
                            <div className="card-actions mt-10 max-w">
                                <button type="submit" className="btn btn-accent size-full">Pubblica</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

}