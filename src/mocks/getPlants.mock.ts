import { Plant } from "../types/Plant.class";
import { GrowthPeriod } from "../types/Plant.growthPeriod.enum";
import { StatePlant } from "../types/Plant.state.enum";
import { Type } from "../types/Plant.type.enum";

export function getPlantsMock(): Promise<Plant[]> {
  return new Promise((resolve) => {
    resolve([
      {
        name: "Pomodoro",
        type: Type.Verdura,
        state: StatePlant.Semina,
        growthPeriod: GrowthPeriod.Estivo,
        time: new Date(2024, 6, 15, 12)
      },
      {
        name: "Girasoli",
        type: Type.Fiore,
        growthPeriod: GrowthPeriod.Primaverile,
        state: StatePlant.Crescita,
        time: new Date(2024, 6, 30, 10)
      },
      {
        name: "Tulipani",
        type: Type.Fiore,
        growthPeriod: GrowthPeriod.Primaverile,
        state: StatePlant.Raccolta,
        time: new Date(2024, 4, 15, 12)
      },
      {
        name: "Patate",
        type: Type.Verdura,
        growthPeriod: GrowthPeriod.Autunnale,
        state: StatePlant.Crescita,
        time: new Date(2024, 10, 18)
      },
      {
        name: "Cocomero",
        type: Type.Frutta,
        growthPeriod: GrowthPeriod.Estivo,
        state: StatePlant.Semina,
        time: new Date(2024, 8, 15, 12)
      },
    ]);
  });
}
