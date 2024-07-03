import { Terrain } from "../../types/terrain.class";
import { CommentCollaps } from "../Collaps/collapsComment.compone";
import { IButton } from "../button/Button.component";

export interface ICard {
    terrainCard: Terrain
    Button: React.ReactElement<IButton>;
}

export const Card: React.FC<ICard> = function ({
    terrainCard,


}: ICard) {
    return (
        <div className="card size-full bg-base-300">
            {terrainCard.user.profilePicture && terrainCard.user.username && (
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


            <div className=" card  bg-base-200 mr-4 ml-4 mt-4 mb-4 ">
                <details className="collapse bg-base-200">
                    <summary className="collapse-title text-xl font-medium">{terrainCard.title}</summary>
                    <div className="collapse-content">
                        <p>{terrainCard.description}</p>
                    </div>
                </details>
                <CommentCollaps terrain={terrainCard} />
            </div>
        </div>
    );
};
