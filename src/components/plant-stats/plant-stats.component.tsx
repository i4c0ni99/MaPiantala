import React from "react";
import { WiTime4 } from "react-icons/wi";
import { IoWaterSharp } from "react-icons/io5";
import { Plant } from "../../types/Plant.class";
import { IButton } from "../button/Button.component";
import { FaSeedling } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import { GiFruitBowl } from "react-icons/gi";

export interface ICardPlant {
  plant: Plant;
  Button?: React.ReactElement<IButton>;
}

export const WaterCard: React.FC<ICardPlant> = function ({
  plant,
}: ICardPlant) {
  return (
    <>
      <tr className="size-full">
        <div className="flex flex-row m-3 justify-between">
          <IoWaterSharp className="size-10 mr-3" />
          <h2 className="mr-2 font-semibold text-xl p-1">{plant.name}</h2>
          <WiTime4 className="size-10 mr-3" />
          {/*  FIXME: Non fa il conto alla rovescia */}
          <div className="flex gap-5">
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": plant.time.getDay }}></span>
              </span>
              days
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": plant.time.getHours }}></span>
              </span>
              hours
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": plant.time.getMinutes }}></span>
              </span>
              min
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": plant.time.getSeconds }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
        <h2 className="text-right text-warning">Scadenza: {plant.time.getDate}</h2>
      </tr>
    </>
  );
};

export const SeedCard: React.FC<ICardPlant> = function ({ plant }: ICardPlant) {
  return (
    <>
      <tr className="size-full">
        <div className="flex flex-row m-3 justify-between">
          <FaSeedling className="size-10 mr-3" />
          <h2 className="mr-2 font-semibold text-xl p-1">{plant.name}</h2>
          {/*  TODO: Mettere cliccabile l'icona per la cancellazione */}
          <HiTrash className="size-10" />
        </div>

        <h2 className="text-right text-warning">Scadenza: {plant.time.get}</h2>
      </tr>
    </>
  );
};

export const HandlerCard: React.FC<ICardPlant> = function ({
  plant,
}: ICardPlant) {
  return (
    <>
      <tr className="size-full">
        <div className="flex flex-row m-3 justify-between">
          <GiFruitBowl className="size-10 mr-3" />
          <h2 className="mr-2 font-semibold text-xl p-1">{plant.name}</h2>
         {/*  TODO: Mettere cliccabile l'icona per la cancellazione */}
          <HiTrash className="size-10"/>
        </div>
        <h2 className="text-right text-warning">Scadenza: {plant.time.getDate}</h2>
      </tr>
    </>
  );
};
