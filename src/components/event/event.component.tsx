import { Event } from "../../types/Event.class";
import { IButton } from "../button/Button.component";

export interface ICardEvent {
    eventInCard: Event
    Button?: React.ReactElement<IButton>;
}

export const EventCard: React.FC<ICardEvent> = function ({
    eventInCard,
    Button,
}: ICardEvent) {
    return (
        <div className="card size-full bg-base-300">
            {eventInCard.user.profilePicture && eventInCard.user.username && (
                <div className="mx-4 my-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full ">
                            <img src={eventInCard.user.profilePicture} />
                        </div>
                    </div>

                    <div className="badge badge-default mx-1 badge-lg ">{eventInCard.user.username}</div>
                </div>
            )}

            {eventInCard.imageUrl && (
                <figure className="px-10 pt-2">
                    <img src={eventInCard.imageUrl} alt={eventInCard.title} className="rounded-xl" />
                </figure>
            )}
            <div className="card-body">
                <h2 className="card-title">{eventInCard.title}</h2>
                <p>{eventInCard.description}</p>
                <div className="w-32">
                    {Button}
                </div>
            </div>
        </div>
    );
};
