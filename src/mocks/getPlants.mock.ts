import { Plant } from "../types/Plant.class";
import { Time } from "../types/Time.class";

export function getPlantsMock(): Promise<Plant[]> {
  return new Promise((resolve) => {
    resolve([
      {
        name: "Pomodoro",
        type: "Ortaggio",
        growthPeriod: "Estivo",
        time: new Time(60, 50),
      },
      {
        name: "Girasoli",
        type: "Fiore",
        growthPeriod: "Stagionale",
        time: new Time(20, 30),
      },
    ]);
  });
}
