import { useEffect, useState } from "react";

import { Plant } from "../types/Plant.class";
import { getPlantsMock } from "../mocks/getPlants.mock";
import {
  HandlerCard,
  SeedCard,
  WaterCard,
} from "../components/plant-stats/plant-stats.component";
import { Card } from "../components/card/Card.component";
import { StatePlant } from "../types/Plant.state.enum";

export function PlantStats() {
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
  }, []);

  function filterPlantsByStatus(plants: Plant[], status: StatePlant): Plant[] {
    return plants.filter((plant) => plant.state === status);
  }

  const PlantCards: React.FC = () => {
    const filteredCrescita = filterPlantsByStatus(plants, StatePlant.Crescita);
    const filteredSemina = filterPlantsByStatus(plants, StatePlant.Semina);
    const filteredRaccolta = filterPlantsByStatus(plants, StatePlant.Raccolta);

    return (
      <>
        <thead className="pl-16 pt-6">
        <p className="mr-2 font-semibold text-xl p-1">Semina</p>
          <div className="divider divider-success" />
          {filteredSemina.map((plant, index) => (
            <div className="m-2 flex size-full justify-between flex-wrap items-center">
              <SeedCard key={index} plant={plant} />
            </div>
          ))}
          <p className="mr-2 font-semibold text-xl p-1">Crescita</p>
          <div className="divider divider-success" />
          {filteredCrescita.map((plant, index) => (
            <div className="m-2 flex size-full justify-between flex-wrap items-center">
              <WaterCard key={index} plant={plant} />
            </div>
          ))}
          <p className="mr-2 font-semibold text-xl p-1">Raccolta</p>
          <div className="divider divider-success" />
          {filteredRaccolta.map((plant, index) => (
            <div className="m-2 size-full flex justify-between flex-wrap items-center">
              <HandlerCard key={index} plant={plant} />
            </div>
          ))}
        </thead>
      </>
    );
  };

  return (
    <>
      <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36">
        <a href="/terrain-upsert">+</a>
      </button>

      <main className="w-6/12 mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            <Card
              terrainCard={{
                title: "Title 1",
                description: "Description 1",
                imageUrl: "https://placeholder.com/500x500",
              }}
            />
          </div>
          <div className="collapse-content">
            <div className="card size-full flex flex-row justify-between items-center p-3 bg-base-300">
              {/* mettere filtraggio in base allo stato della pianta */}
              <PlantCards />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
