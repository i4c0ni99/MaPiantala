import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Event } from "../../types/Event.class";
import { EventCategory } from "../../types/EventCategory.enum";

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
        new Event(eventCreated.id, eventCreated.partecipantsNumer, eventCreated.title, eventCreated.description, eventCreated.imageUrl, new Date(eventCreated.scheduledDate), eventCreated.owner, eventCreated.comments, eventCreated.address, eventCreated.isPublic, eventCreated.latitude, eventCreated.longitude,eventCreated.category,eventCreated.createdAt,eventCreated.updatedAt)
    );

    useEffect(() => {
        setEvent(
            new Event(eventCreated.id, eventCreated.partecipantsNumer, eventCreated.title, eventCreated.description, eventCreated.imageUrl,new Date(eventCreated.scheduledDate), eventCreated.owner, eventCreated.comments, eventCreated.address, eventCreated.isPublic, eventCreated.latitude, eventCreated.longitude,eventCreated.category,eventCreated.createdAt,eventCreated.updatedAt)
        )
    }, [eventCreated]);

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;


        if (type== "date" && e.target instanceof HTMLInputElement) {
            // Safe to access `checked` because it's confirmed as an HTMLInputElement of type checkbox
            setEvent(prev => ({
                ...prev,
                [name]: new Date(value),
            }));
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
        const newEvent = new Event(event.id, event.partecipantsNumer, event.title, event.description, event.imageUrl, event.scheduledDate, event.owner, event.comments, event.address, event.isPublic, event.latitude, event.longitude,event.category,eventCreated.createdAt,eventCreated.updatedAt)
        console.log(newEvent.scheduledDate.valueOf())
        // Optional callback on submission
        if (onSubmission) {
            onSubmission(newEvent);
        }
    };

    return (
        <>
            <div className="card lg:card-side bg-base-300 shadow-xl">
                <figure className="w-full">
                    <img className="size-full" src={event.imageUrl} alt="Album" />
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
                                name="address"
                                defaultValue={event.address}
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
                                <span className="label-text">Scegli una data per il tuo evento </span>
                            </div>
                            <input
                                name="scheduledDate"
                                defaultValue={`${event.scheduledDate.toLocaleDateString()}`}
                                onChange={handleChange}
                                type="date"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Scgli un immagine dal web per il tuo evento</span>
                            </div>
                            <input
                                name="imageUrl"
                                defaultValue={event.imageUrl}
                                onChange={handleChange}
                                type="text"
                                placeholder="URL"
                                className="input input-accent w-full max-w-xs"
                            />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label w-full">
                                <span className=" font-bold w-full">
                                    Evento {event.category}
                                </span>
                            </div>
                            <select name="category" value={event.category} className="select select-accent w-full max-w-xs" onChange={handleChange}>
                                {Object.values(EventCategory).map((s) =>
                                    <option key={s} value={s}>
                                        {s}
                                    </option>)

                                }
                            </select>
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