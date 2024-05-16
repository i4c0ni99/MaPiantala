import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Terrain } from "../../types/terrain.class";

export interface ITerrain {
    terrainCreated: Terrain
    onSubmission?: (data: Terrain) => void;
}



export const CreateEditTerrain = ({
    terrainCreated,
    onSubmission = undefined
}: ITerrain) => {
    // Initial state for the form
    const [terrain, setTerrain] = useState<Terrain>(
        new Terrain(terrainCreated.title, terrainCreated.description, terrainCreated.imageUrl, terrainCreated.position, terrainCreated.slot, terrainCreated.isPublic, terrainCreated.user,terrainCreated.comments)
    );

    useEffect(() => {
        setTerrain(
            new Terrain(terrainCreated.title, terrainCreated.description, terrainCreated.imageUrl, terrainCreated.position, terrainCreated.slot, terrainCreated.isPublic, terrainCreated.user,terrainCreated.comments)
        )
    }, [terrainCreated]);

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox" && e.target instanceof HTMLInputElement) {
            // Safe to access `checked` because it's confirmed as an HTMLInputElement of type checkbox
            const { checked } = e.target;
            setTerrain(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setTerrain(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create a new Terrain instance with the form data
        const newTerrain = new Terrain(
            terrain.title,
            terrain.description,
            terrain.imageUrl,
            terrain.position,
            terrain.slot,
            terrain.isPublic,
            terrain.user,
            terrain.comments
        );
        console.log('New Terrain Created:', newTerrain);

        // Optional callback on submission
        if (onSubmission) {
            onSubmission(newTerrain);
        }
    };

    return (
        <>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure className="w-full p-24">
                    <img className="mask mask-squircle" src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" />
                </figure>

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="card-body mt-12">
                        <h2 className="card-title text-[34px] mb-4">Terreno</h2>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Titolo</span>
                            </div>
                            <input
                                name="title"
                                defaultValue={terrain.title}
                                onChange={handleChange}
                                type="text"
                                placeholder="Titolo del tuo campo"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Posizione</span>
                            </div>
                            <input
                                name="position"
                                defaultValue={terrain.position}
                                onChange={handleChange}
                                type="text"
                                placeholder="Inserisci l'indirizzo del tuo campo"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Slot</span>
                            </div>
                            <input
                                name="slot"
                                defaultValue={terrain.slot}
                                onChange={handleChange}
                                type="number"
                                min="0"
                                placeholder="Inserisci il numero di slot disponibili"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Descrizione</span>
                            </div>
                            <input
                                name="description"
                                defaultValue={terrain.description}
                                onChange={handleChange}
                                type="text"
                                placeholder="Descrizione del campo"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs mt-6">
                            <label className="label cursor-pointer">
                                <span className="label-text">Pubblico</span>
                                <input
                                    name="isPublic"
                                    type="checkbox"
                                    checked={terrain.isPublic}
                                    onChange={handleChange}
                                    className="checkbox checkbox-primary"
                                />
                            </label>
                        </label>

                        <div className="card-actions mt-10">
                            <button type="submit" className="btn btn-primary w-24">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};