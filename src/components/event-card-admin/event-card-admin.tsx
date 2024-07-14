import { Event } from "src/types/Event.class";

interface IEventCardAdmin {
    event: Event;
}

export const EventAdminCard: React.FC<IEventCardAdmin> = function ({ event }) {
    return (
        <div className="card w-96 bg-base-300 shadow-xl">
            <figure>
                <img className=" w-96 h-44" src={event.imageUrl} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {event.owner.firstName + event.owner.lastName}
                </h2>
                <p>{event.title}</p>
                <div className="card-actions justify-end w-80 h-32">
                    <p>{event.description}</p>
                </div>
            </div>
        </div>
    );
};
