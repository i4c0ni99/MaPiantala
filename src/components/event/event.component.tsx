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
            { eventInCard.owner.email && (
              
                <div className="pl-4 my-4 flex place-items-end">
                    <div className="avatar sm:size-16 basis-9">
                        <div className="rounded-full ">
                            <img src={eventInCard.owner?.profilePicture ? eventInCard.owner.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"} />
                        </div>

                    </div>
                    <h1 className="pl-2 basis-3/5 ">{eventInCard.owner.email}</h1>
                </div>
            )}

            

            {eventInCard.imageUrl && (
                <figure className="px-10 pt-2">
                    <img src={eventInCard.imageUrl} alt={eventInCard.title} className="rounded-xl" />
                </figure>
            )}
            <div className=" card  bg-base-200 mr-4 ml-4 mt-4 mb-4 ">
                <div className="w-full py-4 pl-2">
                    <h1 className="text-xl font-medium">{eventInCard.title}</h1>
                </div>
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
