import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Event } from "../../types/Event.class";

export interface IEvent {
    eventCreated: Event
    onSubmission?: (data: Event) => void;
}



export const CreateEditEvent = ({
    eventCreated,
    onSubmission = undefined
}: IEvent) => {
    // Initial state for the form
    const [event, setEvent] = useState<Event>(
        new Event(eventCreated.title, eventCreated.description, eventCreated.imageUrl, eventCreated.date, eventCreated.user, eventCreated.position)
    );

    useEffect(() => {
        setEvent(
            new Event(eventCreated.title, eventCreated.description, eventCreated.imageUrl, eventCreated.date, eventCreated.user, eventCreated.position)
        )
    }, [eventCreated]);

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type == "file" && e.target instanceof HTMLInputElement) {
            if (!e.target.files) return;
            const file = e.target.files[0]
            setEvent(prev => ({
                ...prev,
                [name]: file.text
            }));
            console.log(file.text)

        } else {
            setEvent(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create a new Terrain instance with the form data
        const newEvent = new Event(
            event.title,
            event.description,
            event.imageUrl,
            event.date,
            event.user,
            event.position
        );
        console.log('New Terrain Created:', newEvent);

        // Optional callback on submission
        if (onSubmission) {
            onSubmission(newEvent);
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
                        <h2 className="card-title text-[34px] mb-4">Evento</h2>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Titolo</span>
                            </div>
                            <input
                                name="title"
                                defaultValue={event.title}
                                onChange={handleChange}
                                type="text"
                                placeholder="Titolo del tuo campo"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Posizione</span>
                            </div>
                            <input
                                name="position"
                                defaultValue={event.position}
                                onChange={handleChange}
                                type="text"
                                placeholder="Inserisci l'indirizzo del tuo campo"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </label>


                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Descrizione</span>
                            </div>
                            <input
                                name="description"
                                defaultValue={event.description}
                                onChange={handleChange}
                                type="text"
                                placeholder="Descrizione del campo"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Scegli L'immagine</span>
                            </div>
                            <input name="imageUrl" type="file" onChange={handleChange}
                                accept="immage/*" className="file-input file-input-bordered file-input-accent w-full max-w-xs" required />
                        </label>


                        <div className="card-actions mt-10">
                            <button type="submit" className="btn btn-accent w-24">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};