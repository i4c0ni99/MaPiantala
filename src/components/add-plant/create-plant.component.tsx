import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Plant } from "../../types/Plant.class";


export interface IPlant {

    onSubmission?: (data: Plant) => void;
}



export const CreateEditPlant = ({
    onSubmission = undefined
}: IPlant) => {
    // Initial state for the form
    const [plant, setPlant] = useState<Plant>(
        new Plant(0,'', '', '', '', '', '', '', '', '', '', '', '', '')
    );
    
    useEffect(() => {
        setPlant(plant)
        
    }, [plant]);



    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (e.target instanceof HTMLInputElement) {



            setPlant(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create a new Terrain instance with the form data
        const newPlant = new Plant(plant.id, plant.title, plant.category, plant.description, plant.usage,
            plant.exposure, plant.temperatureRange, plant.terrainType, plant.transplant, plant.fertilization,
            plant.irrigation, plant.colturalCare, plant.harvesting, plant.imageUrl);
        console.log('New Terrain Created:', newPlant);

        // Optional callback on submission
        if (onSubmission) {
            onSubmission(newPlant);
        }
    };

    return (
        <>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure className="w-full ">
                    <img className=" size-full" src={plant.imageUrl} alt="Album" />
                </figure>

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="card-body mt-12">
                        <h2 className="card-title text-[34px] mb-4">Pianta</h2>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Nome</span>
                            </div>
                            <input
                                name="name"
                                onChange={handleChange}
                                defaultValue={plant.title}
                                type="text"
                                placeholder="Titolo del tuo campo"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>


                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Descrizione</span>
                            </div>
                            <input
                                name="description"
                                defaultValue={plant.description}
                                onChange={handleChange}
                                type="text"
                                placeholder="Descrizione del campo"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Prendersene cura</span>
                            </div>
                            <input
                                name="coltureCare"
                                defaultValue={plant.colturalCare}
                                onChange={handleChange}
                                type="text"
                                placeholder="cura del campo"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Sotto specie</span>
                            </div>
                            <input
                                name="category"
                                defaultValue={plant.category}
                                onChange={handleChange}
                                type="text"
                                placeholder="specie"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Come usare</span>
                            </div>
                            <input
                                name="usage"
                                defaultValue={plant.usage}
                                onChange={handleChange}
                                type="text"
                                placeholder="utilizzo"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Distanza tra le piante</span>
                            </div>
                            <input
                                name="transplant"
                                defaultValue={plant.transplant}
                                onChange={handleChange}
                                type="text"
                                placeholder="distanza"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Esposizione al sole</span>
                            </div>
                            <input
                                name="exposure"
                                defaultValue={plant.exposure}
                                onChange={handleChange}
                                type="text"
                                placeholder="esposizione"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Temperatura</span>
                            </div>
                            <input
                                name="temperatureRange"
                                defaultValue={plant.temperatureRange}
                                onChange={handleChange}
                                type="text"
                                placeholder="temperatura"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Tipo di terreno</span>
                            </div>
                            <input
                                name="terrainType"
                                defaultValue={plant.terrainType}
                                onChange={handleChange}
                                type="text"
                                placeholder="terreno"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Scgli un immagine dal web per la pianta</span>
                            </div>
                            <input
                                name="imageUrl"
                                defaultValue={plant.imageUrl}
                                onChange={handleChange}
                                type="text"
                                placeholder="URL"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Concimazione</span>
                            </div>
                            <input
                                name="fertilization"
                                defaultValue={plant.fertilization}
                                onChange={handleChange}
                                type="text"
                                placeholder="concimazione"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Concimazione</span>
                            </div>
                            <input
                                name="irrigation"
                                defaultValue={plant.irrigation}
                                onChange={handleChange}
                                type="text"
                                placeholder="irrigazione"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Concimazione</span>
                            </div>
                            <input
                                name="harvesting"
                                defaultValue={plant.harvesting}
                                onChange={handleChange}
                                type="text"
                                placeholder="concimazione"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>
                        <div className="card-actions mt-10 max-w">
                            <button type="submit" className="btn btn-accent size-full">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};