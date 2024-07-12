import { Plant } from "../types/Plant.class";
import { axiosInstance } from "../utils/axiosInstance";


export async function getPlants(): Promise<Plant[]> {
   const result = await axiosInstance.get('plant')
   return result.data
   

}

export async function getPlantById(id?:string) {
    const result = await axiosInstance.get(`plant/${id}`)
    return result.data
}


export async function postPlant(plant : Plant ){
    await axiosInstance.post('plant',{
            title: plant.title,
			category: plant.category,
			description: plant.description,
			usage: plant.usage,
			exposure: plant.exposure,
			temperatureRange: plant.temperatureRange,
			terrainType: plant.terrainType,
			transplant: plant.transplant,
			fertilization: plant.fertilization,
			irrigation: plant.irrigation,
			colturalCare: plant.colturalCare,
			harvesting: plant.harvesting,
			imageUrl: plant.imageUrl,
})
}

export async function udatePlant(plant:Plant) {
    await axiosInstance.patch('plant',{
        title: plant.title,
        category: plant.category,
        description: plant.description,
        usage: plant.usage,
        exposure: plant.exposure,
        temperatureRange: plant.temperatureRange,
        terrainType: plant.terrainType,
        transplant: plant.transplant,
        fertilization: plant.fertilization,
        irrigation: plant.irrigation,
        colturalCare: plant.colturalCare,
        harvesting: plant.harvesting,
        imageUrl: plant.imageUrl,
    })
}