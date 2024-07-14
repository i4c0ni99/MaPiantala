

import { Event } from "../../types/Event.class"

import { MapCard } from "../map-for-card/map-card";
import { ChangeEvent, FormEvent, useState } from "react";



interface ICardEventDetailAdmin {
    event?: Event
    onSubmission?: (data: Event) => void;
}

export const EventDetailAdminCard: React.FC<ICardEventDetailAdmin> = function ({ event, onSubmission }) {
    const [partecipantLimit] = useState<number[]>([50, 100, 200, 300, 400, 500, 600])


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (event)
            event.partecipantsNumer = parseInt(e.target.value)
    };
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
            <>
                <div className="card lg:card-side bg-base-300 shadow-xl">

                    <figure className="h-72 w-64 lg:size-96 mt-8 mx-6">
                        <MapCard obj={event as Event}>
                        </MapCard>
                    </figure>
                    <div className="card-body size-1/2">
                        <div className="avatar">
                            <div className="-ml-4 lg:w-14 rounded-full">
                                <img src={event.owner.profilePicture ? event.owner.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"} />
                            </div>
                            <h1 className=" lg:mt-12 ml-4">{event.owner.email}</h1>
                        </div>


                        <h1 className="card-title w-52">{event.title}</h1>
                        <h4 className="w-52">{event.address}</h4>
                        <p className="w-52">{event.description}</p>
                        <form className="w-full" onSubmit={handleSubmit} >
                            <label className="form-control w-full max-w-xs">
                                <div className="label w-64">
                                    <span className=" font-bold">
                                        il limite di patrecipanti è {event.partecipantsNumer}
                                    </span>
                                </div>
                                <select name="select" value={event.partecipantsNumer} className="select select-accent w-full max-w-xs" onChange={handleChange}>
                                    {partecipantLimit.map((s) =>
                                        <option key={s} value={s}>
                                            {s}
                                        </option>)

                                    }
                                </select>
                            </label>
                            <div className="card-actions justify-end">
                                <div className="card-actions mt-10 max-w">
                                    <button type="submit" className="btn btn-accent size-full">Publica</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </>
        )

}