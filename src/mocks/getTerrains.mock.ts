import { useEffect, useState } from "react";
import { Plant } from "../types/Plant.class";
import { Terrain } from "../types/terrain.class";
import { getPlantsMock } from "./getPlants.mock";

export function getTerrainsMock(): Promise<Terrain[]> {
  return new Promise((resolve) => {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const plants: Plant[] = await getPlantsMock();
          setPlants(plants);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();

      resolve([
        {
          title: "Title 1",
          description: "Description 1",
          imageUrl: "https://placeholder.com/500x500",
          position: "Position 1",
          slot: 1,
          isPublic: true,
          user: {
            email: "user1@example.com",
            profilePicture: "https://placeholder.com/200x200",
            firstName: "John",
            lastName: "Doe",
            username: "johndoe",
            userPlants: plants,
          },
        },
        {
          title: "Title 2",
          description: "Description 2",
          imageUrl: "https://placeholder.com/500x500",
          position: "Position 2",
          slot: 2,
          isPublic: false,
          user: {
            email: "user2@example.com",
            profilePicture: "https://placeholder.com/200x200",
            firstName: "Jane",
            lastName: "Smith",
            username: "janesmith",
            userPlants: plants,
          },
        },
      ]);
    });
  });
}
