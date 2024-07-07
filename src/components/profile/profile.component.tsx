import React, { useEffect } from "react";
import { User } from "../../types/User.class";




export interface IHeroProfile {
    user: User

}

export const Profile: React.FC<IHeroProfile> = function ({
    user,
}: IHeroProfile) {

    useEffect(() => {
        user
    }, []);

    return (
        <div className="hero size-full" style={{ backgroundImage: "url(" + user.copertinePicture + ")" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Hello {user.email}</h1>
                    <button className="btn btn-ghost size-full">cambia immagine di copertina</button>
                </div>
            </div>
            <div className="self-end h-32 w-full pb-2">
                <div className="avatar size-full pl-2">
                    <div className="size-28 rounded-full">
                        <img src={user.profilePicture} />
                    </div>
                    <div className="self-end flex-col size-3/4 pt-6 pl-2 ">
                        <h1 className="text-2xl font-bold  ">{user.firstName + " " + user.lastName}</h1>
                        <h1 className="text-l font-bold ">{user.username}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}