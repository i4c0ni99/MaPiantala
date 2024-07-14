import { getCookie } from "../../services/cookies.service";
import { Event } from "../../types/Event.class";
import { CommentCollaps } from "../collaps/collaps-comment.compone";
import { Link } from "react-router-dom";

export interface ICardEvent {
    event: Event;
}

export const EventCard: React.FC<ICardEvent> = function ({
    event: event,
}: ICardEvent) {
    const user = getCookie("user");
    return (
        <div className="card size-full bg-base-300">
            {event.owner.email && (
                <div className="pl-4 my-4 flex place-items-end">
                    <div className="avatar sm:size-16 basis-9">
                        <div className="rounded-full ">
                            <img
                                src={
                                    event.owner?.profilePicture
                                        ? event.owner.profilePicture
                                        : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                }
                            />
                        </div>
                    </div>
                    <h1 className="pl-2 basis-3/5 ">{event.owner.email}</h1>
                </div>
            )}

            {event.imageUrl && (
                <figure className="px-10 pt-2">
                    <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="rounded-xl"
                    />
                </figure>
            )}
            <div className=" card  bg-base-200 mr-4 ml-4 mt-4 mb-4 ">
                <div className="w-full py-4 pl-2">
                    <h1 className="text-xl font-medium">{event.title}</h1>
                </div>
                <CommentCollaps event={event} />
            </div>
            {user && user.id == event.owner.id ? (
                <div className="size-full grid justify-items-end py-2 px-8">
                    <Link
                        rel="stylesheet"
                        to={`/event-upsert/${event.id}`}
                        key={event.id}
                    >
                        <button className="btn btn-accent h-4 w-32  ">
                            Modifica
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="size-full grid justify-items-end py-2 px-8">
                    <button className="btn btn-accent h-4 w-32 ">
                        Prenota
                    </button>
                </div>
            )}
        </div>
    );
};
