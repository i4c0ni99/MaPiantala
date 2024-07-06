
import { Terrain } from "../types/terrain.class";
import { axiosInstance } from "../utils/axiosInstance";
import location from "../utils/location";





export async function getTerrainsMockByDistance(): Promise<Terrain[]> {
    const result = await axiosInstance.get(`terrain/lat/${location.lat}/lon/${location.lng}/distance/10000`)
    return result.data
}


export async function getTerrainById(id?: string): Promise<Terrain> {
    const result = await axiosInstance.get(`terrain/${id}`)
    return result.data
}

export async function getTerrainsByUser(id : number){
   const result = await axiosInstance.get(`terrain/user/${id}`)
   return result.data
}
export async function postTerrain(terrain: Terrain) {
    console.log(terrain)
    await axiosInstance.post('/terrain', {
        "title": terrain.title,
        "description": terrain.description,
        "latitude": terrain.latitude,
        "longitude": terrain.longitude,
        "address": terrain.address,
        "imageUrl": terrain.imageUrl,
        "userId": terrain.user.id
    })
}

