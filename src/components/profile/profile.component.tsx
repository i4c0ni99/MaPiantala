import React, { useEffect } from "react";
import { User } from "src/types/User.class";

export interface IHeroProfile {
    user: User;
}

export const Profile: React.FC<IHeroProfile> = function ({
    user,
}: IHeroProfile) {
    useEffect(() => {
        user;
    }, []);

    return (
        <div
            className="hero size-full"
            style={{
                backgroundImage: user.copertinePicture
                    ? "url(" + user.copertinePicture + ")"
                    : "url(" +
                      "https://upload.wikimedia.org/wikipedia/commons/9/97/Campo_Felice_Lake.jpg" +
                      ")",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Hello {user?.firstName + " " + user?.lastName}
                    </h1>
                    <button className="btn btn-ghost size-full">
                        cambia immagine di copertina
                    </button>
                </div>
            </div>
            <div className="self-end h-32 w-full pb-2">
                <div className="avatar size-full pl-2">
                    <div className="size-28 rounded-full">
                        <img
                            src={
                                user.profilePicture
                                    ? user.profilePicture
                                    : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                            }
                        />
                    </div>
                    <div className="self-end flex-col size-3/4 pt-6 pl-2 ">
                        <h1 className="text-2xl font-bold  ">
                            {user?.firstName + " " + user?.lastName}
                        </h1>
                        <h1 className="text-l font-bold ">{user?.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
