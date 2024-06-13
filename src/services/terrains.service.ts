import { getTerrainsMock } from "../mocks/getTerrains.mock";
import { Terrain } from "../types/Terrain.class";

export async function getTerrains(): Promise<Terrain[]> {
    const terrains = await getTerrainsMock();
    return terrains;
}
