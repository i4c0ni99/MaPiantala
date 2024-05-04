import { Terrain } from "../../types/terrain.class";
import { IButton } from "../button/Button.component";

export interface ICard {
    terrainCard: Terrain
    Button?: React.ReactElement<IButton>;
}

export const Card: React.FC<ICard> = function ({
    terrainCard,
    Button
   
}: ICard) {
    return (
        <div className="card size-full bg-base-300">
            {terrainCard.user?.profilePicture && terrainCard.user.username && (
                <div className="mx-4 my-4">
                    <div className="avatar">
                        <div className="w-10 rounded-full ">
                            <img src={terrainCard.user.profilePicture} />
                        </div>
                    </div>

                    <div className="badge badge-default mx-1 badge-lg ">{terrainCard.user.username}</div>
                </div>
            )}

            {terrainCard.imageUrl && (
                <figure className="px-10 pt-2">
                    <img src={terrainCard.imageUrl} alt={terrainCard.title} className="rounded-xl" />
                </figure>
            )}
            <div className="card-body">
                <h2 className="card-title">{terrainCard.title}</h2>
                <p>{terrainCard.description}</p>
                <div className="w-32">
                    {Button}
                </div>
            </div>
        </div>
    );
};
