import { useEffect, useState } from "react";
import { Profile } from "../components/profile/profile.component";
import { Terrain } from "../types/terrain.class";
import { MyTerrainCard } from "../components/myTerrain/myTerrainCard.component";
import { getTerrainsByUser } from "../services/terrains.service";
import { getCookie } from "../services/MaPiantalaCookies.service";

export function ProfilePage() {
    const [terrains, setTerrains] = useState<Terrain[]>([]);
    const user = getCookie('user')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const terrains: Terrain[] = await getTerrainsByUser(user.id);
                setTerrains(terrains);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user.id]);

    return (
        <>
            <div className="h-96 w-full">
                <Profile user={user}></Profile>
            </div>

            <main className="mx-auto pb-4 pl-2 pr-2 sm:size-11/12 lg:size-1/2 ">
                {terrains.map((terrain) =>
                    terrain.user.email == user.email ? (
                        <MyTerrainCard terrain={terrain}></MyTerrainCard>
                    ) : null
                )}
            </main>
        </>
    );

}
