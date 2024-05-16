import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Plant } from "../../types/Plant.class";
import { GrowthPeriod } from "../../types/Plant.growthPeriod.enum";
import { Type } from "../../types/Plant.type.enum";

export interface IPlant {

    onSubmission?: (data: Plant) => void;
}



export const CreateEditPlant = ({
    onSubmission = undefined
}: IPlant) => {
    // Initial state for the form
    const [plant, setPlant] = useState<Plant>(
        new Plant('', Type.Fiore, 0, GrowthPeriod.Stagionale, new Date(), '', '')
    );
    useEffect(() => {
        setPlant(plant)
    }, [plant]);



    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type == "file" && e.target instanceof HTMLInputElement) {
            if (!e.target.files) return;
            const file = e.target.files[0]
            setPlant(prev => ({
                ...prev,
                [name]: file.text
            }));
            console.log(file.text)

        } else {
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
        const newPlant = new Plant(
            plant.name, plant.type, plant.state, plant.growthPeriod, plant.time, plant.description, plant.imagePlant);
        console.log('New Terrain Created:', newPlant);

        // Optional callback on submission
        if (onSubmission) {
            onSubmission(newPlant);
        }
    };

    return (
        <>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure className="w-full p-24">
                    <img className="mask mask-squircle" src={"/" + plant.imagePlant} alt="Album" />
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
                                defaultValue={plant.name}
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
                                <span className="label-text">Periodo</span>
                            </div>
                            <select className="select select-accent w-full max-w-xs">
                                {Object.values(GrowthPeriod).map((growthPeriod) =>
                                    <option key={growthPeriod} value={growthPeriod}>
                                        {growthPeriod}
                                    </option>
                                )

                                }
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Categotia</span>
                            </div>
                            <select className="select select-accent w-full max-w-xs">
                                {Object.values(Type).map((type) =>
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                )

                                }
                            </select>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Scegli L'immagine</span>
                            </div>
                            <input name="imagePlant" type="file" onChange={handleChange}
                                accept="immage/*" className="file-input file-input-bordered file-input-accent w-full max-w-xs" required/>
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