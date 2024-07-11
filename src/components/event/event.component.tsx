import { getCookie } from "../../services/MaPiantalaCookies.service";
import { Event } from "../../types/Event.class";
import { CommentCollaps } from "../Collaps/collapsComment.compone";
import { Link } from "react-router-dom";

export interface ICardEvent {
    eventInCard: Event
}

export const EventCard: React.FC<ICardEvent> = function ({
    eventInCard,

}: ICardEvent) {
    const user = getCookie('user')
    return (
        <div className="card size-full bg-base-300">
            {eventInCard.owner.profilePicture && eventInCard.owner.email && (
                <div className="mx-4 my-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full ">
                            <img src={eventInCard.owner.profilePicture} />
                        </div>
                    </div>
                    <div className="badge badge-default mx-1 badge-lg ">{eventInCard.owner.email}</div>
                </div>
            )}

            {eventInCard.imageUrl && (
                <figure className="px-10 pt-2">
                    <img src={eventInCard.imageUrl} alt={eventInCard.title} className="rounded-xl" />
                </figure>
            )}
            <div className=" card  bg-base-200 mr-4 ml-4 mt-4 mb-4 ">
                <details className="collapse bg-base-200">
                    <summary className="collapse-title text-xl font-medium">{eventInCard.title}</summary>
                    <div className="collapse-content">
                        <p>{eventInCard.description}</p>
                    </div>
                </details>
                <CommentCollaps event={eventInCard} />
            </div>
            {user && user.id == eventInCard.owner.id ?
                <div className="size-full grid justify-items-end py-2 px-8">
                    <Link rel="stylesheet" to={`/event-upsert/${eventInCard.id}`} key={eventInCard.id}>
                        <button className="btn btn-accent h-4 w-32  ">
                            Modifica
                        </button>
                    </Link>
                </div> :
                <div className="size-full grid justify-items-end py-2 px-8">
                    <button className="btn btn-accent h-4 w-32 ">
                        prenota
                    </button>
                </div>}
        </div>
    );
};
