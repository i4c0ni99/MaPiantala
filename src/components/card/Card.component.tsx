import { getCookie } from "../../services/MaPiantalaCookies.service";
import { Terrain } from "../../types/terrain.class";
import { CommentCollaps } from "../Collaps/collapsComment.compone";
import { IButton } from "../button/Button.component";
import { Link } from "react-router-dom";

export interface ICard {
    terrainCard: Terrain
    Button: React.ReactElement<IButton>;
}

export const Card: React.FC<ICard> = function ({
    terrainCard,


}: ICard) {
    const user = getCookie('user')


    return (
        <div className="card size-full bg-base-300">
            {terrainCard.user.email && (
                <div className="pl-4 my-4 flex place-items-end">
                    <div className="avatar sm:size-16 basis-9">
                        <div className="rounded-full ">
                            <img src={terrainCard.user?.profilePicture ? terrainCard.user.profilePicture : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"} />
                        </div>

                    </div>
                    <h1 className="pl-2 basis-3/5 ">{terrainCard.user.email}</h1>
                </div>
            )}

            {terrainCard.imageUrl && (
                <figure className="px-10 pt-2">
                    <img src={terrainCard.imageUrl} alt={terrainCard.title} className="rounded-xl" />
                </figure>
            )}


            <div className=" card  bg-base-200 mr-4 ml-4 mt-4 mb-4 ">

                <details className="collapse bg-base-200 flex">
                    <summary className="collapse-title text-xl font-medium basis-3/4">{terrainCard.title}</summary>
                    <div className="collapse-content">
                        <h1>{terrainCard.description}</h1>
                        <h1 className="text-l font-medium basis-3/4">il terreno si trova in </h1>
                        <h2 className="text-l font-medium basis-3/4">{terrainCard.address}</h2>
                            
                    </div>
                </details>
                <CommentCollaps terrain={terrainCard} />
            </div>
            {user && user.id === terrainCard.user.id ?
                <div className="size-full grid justify-items-end py-2 px-8">
                    <Link rel="stylesheet" to={`/terrain-upsert/${terrainCard.id}`} >
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
