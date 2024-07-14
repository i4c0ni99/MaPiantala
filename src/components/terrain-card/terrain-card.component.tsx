import { getCookie } from "../../services/cookies.service";
import { Terrain } from "src/types/Terrain.class";
import { CommentCollaps } from "../tabs/tab.component";
import { IButton } from "../button/button.component";
import { Link } from "react-router-dom";

export interface ICard {
    terrain: Terrain;
    Button?: React.ReactElement<IButton>;
}

export const TerrainCard: React.FC<ICard> = function ({ terrain }: ICard) {
    const user = getCookie("user");
    return (
        <div className="card size-full bg-base-300">
            {terrain.user.email && (
                <div className="pl-4 my-4 flex place-items-end">
                    <div className="avatar sm:size-16 basis-9">
                        <div className="rounded-full ">
                            <img
                                src={
                                    terrain.user?.profilePicture
                                        ? terrain.user.profilePicture
                                        : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                                }
                            />
                        </div>
                    </div>
                    <h1 className="pl-2 basis-3/5 ">
                        {terrain.user.email}
                    </h1>
                </div>
            )}

            {terrain.imageUrl && (
                <figure className="px-10 pt-2">
                    <img
                        src={terrain.imageUrl}
                        alt={terrain.title}
                        className="rounded-xl"
                    />
                </figure>
            )}

            <div className=" card  bg-base-200 mr-4 ml-4 mt-4 mb-4 ">
                <div className="w-full py-4 pl-2">
                    <h1 className="text-xl font-medium">{terrain.title}</h1>
                </div>
                <CommentCollaps terrain={terrain} />
            </div>
            {user && user.id === terrain.user.id ? (
                <div className="size-full grid justify-items-end py-2 px-8">
                    <Link
                        rel="stylesheet"
                        to={`/terrain-upsert/${terrain.id}`}
                    >
                        <button className="btn btn-accent h-4 w-32  ">
                            Modifica
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="size-full grid justify-items-end py-2 px-8 mb-10">
                    <button className="btn btn-accent h-4 w-32 mb-5">
                        Prenota
                    </button>
                </div>
            )}
        </div>
    );
};
