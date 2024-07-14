import { useEffect, useState } from "react";
import { Profile } from "../components/profile/profile.component";
import { Terrain } from "../types/Terrain.class";
import { getTerrainsByUser } from "../services/terrains.service";
import { getCookie } from "../services/cookies.service";
import { TerrainCard } from "../components/terrain-card/terrain-card.component";

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
    }, []);

    return (
        <>
            <div className="h-96 w-full">
                <Profile user={user}></Profile>
            </div>

            <main className="mx-auto pb-4 pl-2 pr-2 sm:size-11/12 lg:size-1/2 ">
                {terrains.map((terrain) =>
                    terrain.user.id == user.id ? (
                        <TerrainCard terrain={terrain}></TerrainCard>
                    ) : null
                )}
            </main>
        </>
    );

}
