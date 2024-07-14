import { Profile } from "../components/profile/profile.component";

import { User } from "../types/User.class";
import { getCookie, setUserCookie } from "../services/cookies.service";
import { CardSettings } from "../components/settings-profile/settings-profile.component";
import { useEffect, useState } from "react";
//import axios from "axios";

export function SettingsPage() {
    const [user, setUser] = useState<User>(getCookie("user"));
    console.log("useState:", user);
    useEffect(() => {
        setUser(getCookie("user"));
        console.log("use Effect:", user);
    }, []);

    return (
        <>
            <div className=" fixed h-80 w-full z-40">
                <Profile user={user}></Profile>
            </div>
            <main className="pt-96 pl-2 pr-2 pb-8 sm:size-11/12 lg:size-1/2 mx-auto ">
                <CardSettings
                    onSubmission={async (data: User) => {
                        setUserCookie(data);
                    }}
                    oldUser={user}
                />
            </main>
        </>
    );
}
