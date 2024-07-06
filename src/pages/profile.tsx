import { useEffect, useState } from "react";
import { Profile } from "../components/profile/profile.component";
import { User } from "../types/User.class";
import { Terrain } from "../types/terrain.class";
//import { getTerrainsMock } from "../mocks/getTerrains.mock";
import { MyTerrainCard } from "../components/myTerrain/myTerrainCard.component";

export function ProfilePage() {
  const [terrains, setTerrains] = useState<Terrain[]>([]);
  const user: User = new User(
    1,
    "user1@example.com",
    "https://staticfanpage.akamaized.net/wp-content/uploads/sites/6/2019/08/image16.jpg",
    "Lorenzo",
    "Lamonaca",
    "HoldHappy39",
    "",
    "",
    false,
    "https://citynews-torinotoday.stgy.ovh/~media/horizontal-mid/19183715163212/campo-di-colza-collegno-campo-volo-foto-mario-alesina-2.jpg",
  );


  useEffect(() => {
    const fetchData = async () => {
      try {
        const terrains: Terrain[] = await getTerrainsMock();
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
          terrain.user.email == user.email ? (
            <MyTerrainCard terrain={terrain}></MyTerrainCard>
          ) : null
        )}
      </main>
    </>
  );

}
