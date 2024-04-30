import { getTerrainsMock } from "../mocks/getTerrains.mock";
import { Terrain } from "../types/terrain.interface";

export async function getTerrains(): Promise<Terrain[]> {
    const terrains = await getTerrainsMock();
    return terrains;
}
