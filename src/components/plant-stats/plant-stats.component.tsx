import { PlantTime, Water } from "../../assets/Icon/plantIcon";
import { Plant } from "../../types/Plant.class";
import { IButton } from "../button/Button.component";
import React from "react";

interface CustomStyle {
  [key: string]: string | number;
}

function setCustomStyle(value: number): CustomStyle {
  return {
    "--value": value.toString(),
  };
}

export interface ICardPlant {
  plant: Plant;
  Button?: React.ReactElement<IButton>;
}

export const WaterCard: React.FC<ICardPlant> = function ({
  plant,
}: ICardPlant) {
  const styledays = setCustomStyle(plant.time.days);
  const stylehours = setCustomStyle(plant.time.hours);
  const styleminutes = setCustomStyle(plant.time.minutes);
  const styleseconds = setCustomStyle(plant.time.seconds);
  return (
    <div className="card size-full flex flex-row justify-between items-center p-3 bg-base-300">
      <Water />
      <h2>{plant.name}</h2>
      <PlantTime />
      <div className="flex gap-5">
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={styledays}></span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={stylehours}></span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={styleminutes}></span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={styleseconds}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};
