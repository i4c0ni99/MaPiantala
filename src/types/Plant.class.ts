import { GrowthPeriod } from "./Plant.growthPeriod.enum";
import { StatePlant } from "./Plant.state.enum";
import { Type } from "./Plant.type.enum";

export class Plant {
  constructor(
    public name: string,
    public type: Type,
    public state: StatePlant,
    public growthPeriod: GrowthPeriod, //Periodo Estivo, Primaverile, Autunnale, Invernale, Stagionale(Vale per tutte le stagioni)
    public time: Date
    
  ) {}
}
