import { useContext, useEffect, useState } from "react";
import { Profile } from "../components/profile/profile.component";
import { Terrain } from "../types/terrain.class";
import { MyTerrainCard } from "../components/myTerrain/myTerrainCard.component";
import { MyContext } from "../services/MyContext";
import { getTerrainsByUser } from "../mocks/getTerrains.mock";

export function ProfilePage() {
  const [terrains, setTerrains] = useState<Terrain[]>([]);
  const userContext = useContext(MyContext).data.user


  useEffect(() => {
    const fetchData = async () => {
      try {
        const terrains: Terrain[] = await getTerrainsByUser(userContext.id);
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
        <Profile user={userContext}></Profile>
      </div>

      <main className="mx-auto pb-4 pl-2 pr-2 sm:size-11/12 lg:size-1/2 ">
        {terrains.map((terrain) =>
          terrain.user.email == userContext.email ? (
            <MyTerrainCard terrain={terrain}></MyTerrainCard>
          ) : null
        )}
      </main>
    </>
  );

}
