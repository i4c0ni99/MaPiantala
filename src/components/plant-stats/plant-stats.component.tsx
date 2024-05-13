import React from "react";
import { WiTime4 } from "react-icons/wi";
import { IoWaterSharp } from "react-icons/io5";
import { Plant } from "../../types/Plant.class";
import { IButton } from "../button/Button.component";
import { FaSeedling } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import { GiFruitBowl } from "react-icons/gi";
import { Countdown } from "../count-down/count-down.component";

export interface ICardPlant {
  plant: Plant;
  Button?: React.ReactElement<IButton>;
}

const formatExpirationDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

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
          <Countdown targetDate={plant.time} />
        </div>
        <h2 className="text-right text-warning">
          Scadenza: {formatExpirationDate(plant.time)}
        </h2>
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
          {/* TODO: Mettere cliccabile l'icona della cancellazione */}
          <HiTrash className="size-10 hover:text-red-900" />
        </div>
        <h2 className="text-right text-warning">
        Scadenza: {formatExpirationDate(plant.time)}
        </h2>
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
          {/* TODO: Mettere cliccabile l'icona della cancellazione */}
          <HiTrash className="size-10 hover:text-red-900" />
        </div>
        <h2 className="text-right text-warning">
        Scadenza: {formatExpirationDate(plant.time)}
        </h2>
      </tr>
    </>
  );
};
