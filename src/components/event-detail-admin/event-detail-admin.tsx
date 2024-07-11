





import { Link } from "react-router-dom";
import { Event } from "../../types/Event.class"

import { MapCard } from "../map-for-card/map-card";
import { FormEvent } from "react";



interface ICardEventDetailAdmin {
    event?: Event
    onSubmission?: (data: Event) => void;
}

export const EventDetailAdminCard: React.FC<ICardEventDetailAdmin> = function ({ event, onSubmission }) {




    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create a new Terrain instance with the form data
        document.getElementsByName("select").values
        if (event) {
            event.isPublic = true
            if (onSubmission)
                onSubmission(event)
        }


        // Optional callback on submission

    };
    if (event)
        return (
            <div className="card card-side bg-base-300 shadow-xl">

                <figure className="size-96 mt-8 ml-12 mb-12">
                    <MapCard obj={event as Event}></MapCard>
                </figure>
                <div className="card-body size-1/2">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={event.owner.profilePicture} />
                        </div>
                        <h1 className="mt-12 ml-4">{event.owner.email}</h1>
                    </div>


                    <h1 className="card-title">{event.title}</h1>
                    <h4>{event.address}</h4>
                    <p>{event.description}</p>
                    <h1>numero di persone totali {event.partecipantsNumer}</h1>
                    <form className="w-full" onSubmit={handleSubmit} >
                        <div className="card-actions justify-end">
                            <div className="card-actions mt-10 max-w">
                                    <button type="submit" className="btn btn-accent size-full" >Publica</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

}