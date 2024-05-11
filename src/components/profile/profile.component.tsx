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
                    <h1 className="mb-5 text-5xl font-bold">Hello {user.username}</h1>
                    <button className="btn btn-ghost size-full">cambia immagine di copertina</button>
                </div>
            </div>
            <div className="self-end w-full pb-4 pl-4 ">
                <div className="avatar">
                    <div className="size-28 rounded-full  ">
                        <img src={user.profilePicture} />
                    </div>
                    <div className="self-end flex-col h-16 w-96 ml-4 mt-10">
                        <h1 className="text-2xl font-bold">{user.firstName + " " + user.lastName}</h1>
                        <h1 className="text-l font-bold ">{user.username}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}