import React from "react";
import { Card } from "../card/Card.component";
import { Button, IButton } from "../button/Button.component";
import { Terrain } from "../../types/Terrain.class";

export interface IMyTerrainCard {
    terrain: Terrain
}

export const MyTerrainCard: React.FC<IMyTerrainCard> = function ({ terrain }: IMyTerrainCard) {
    const button: React.ReactElement<IButton> = (
        <Button text={"Modifica"} ></Button>
    )
    return (

        <>
            <Card terrainCard={terrain} Button={button}></Card>
        </>
    )


}