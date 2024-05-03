import { Time } from "./Time.class";

export class Plant {
  constructor(
    public name: string,
    public type: string,
    public growthPeriod: string, //Periodo Estivo, Primaverile, Autunnale, Invernale, Stagionale(Vale per tutte le stagioni)
    public time: Time
  ) {}
}
