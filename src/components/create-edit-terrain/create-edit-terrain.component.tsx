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
        new Terrain(0,terrainCreated.title,terrainCreated.description,terrainCreated.imageUrl,terrainCreated.address,terrainCreated.slot,terrainCreated.terrainSize,terrainCreated.isPublic,terrainCreated.user,terrainCreated.comments,
            0.0,0.0))

    useEffect(() => {
        setTerrain(
            new Terrain(0,terrainCreated.title,terrainCreated.description,terrainCreated.imageUrl,terrainCreated.address,terrainCreated.slot,terrainCreated.terrainSize,terrainCreated.isPublic,terrainCreated.user,terrainCreated.comments,
            0,0.0)
        )
    }, [terrainCreated]);

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (e.target instanceof HTMLInputElement) {
            // Safe to access `checked` because it's confirmed as an HTMLInputElement of type checkbox
           
            
            setTerrain(prev => ({
                ...prev,
                [name]: value,
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
        
        const newTerrain =  new Terrain(0,terrain.title,terrain.description,terrain.imageUrl,terrain.address,terrain.slot,terrain.terrainSize,terrain.isPublic,terrain.user,terrain.comments,
            0.0,0.0)
       

        // Optional callback on submission
        if (onSubmission) {
            console.log('New Terrain Created:', newTerrain);
            onSubmission(newTerrain);
        }
    };

    return (
        <>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure className="w-full">
                    <img className="size-full" src={terrain.imageUrl} alt="Album" />
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
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Posizione</span>
                            </div>
                            <input
                                name="address"
                                defaultValue={terrain.address}
                                onChange={handleChange}
                                type="text"
                                placeholder="Inserisci l'indirizzo del tuo campo"
                                className="input input-accent w-full max-w-xs"
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
                                className="input input-accent w-full max-w-xs"
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
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Scgli un immagine dal web per la pianta</span>
                            </div>
                            <input
                                name="imageUrl"
                                defaultValue={terrain.imageUrl}
                                onChange={handleChange}
                                type="text"
                                placeholder="URL"
                                className="input input-accent w-full max-w-xs"
                            />
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