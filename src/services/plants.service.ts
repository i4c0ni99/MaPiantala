import { Plant } from "../types/Plant.class";
import { axiosInstance } from "../utils/axiosInstance";

export async function getPlants(): Promise<Plant[]> {
    const result = await axiosInstance.get('plant');
    if (!result.data) return [];

    return result.data.map(
        (plant: Plant) => new Plant(
            plant.id,
            plant.title,
            plant.category,
            plant.description,
            plant.usage,
            plant.exposure,
            plant.temperatureRange,
            plant.terrainType,
            plant.transplant,
            plant.fertilization,
            plant.irrigation,
            plant.colturalCare,
            plant.harvesting,
            plant.imageUrl,
        )
    );
}

export async function getPlantById(id?: string) {
    const result = await axiosInstance.get(`plant/${id}`)
    if (!result.data) return null;

    return new Plant(
        result.data.id,
        result.data.title,
        result.data.category,
        result.data.description,
        result.data.usage,
        result.data.exposure,
        result.data.temperatureRange,
        result.data.terrainType,
        result.data.transplant,
        result.data.fertilization,
        result.data.irrigation,
        result.data.colturalCare,
        result.data.harvesting,
        result.data.imageUrl,
    );
}

export async function postPlant(plant: Plant) {
    await axiosInstance.post('plant', {
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

export async function udatePlant(plant: Plant) {
    await axiosInstance.patch('plant', {
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
    });
}

export async function searchPlants(name?: string) {
    const result = await axiosInstance.get(`/plant?searchQuery=${name}`);
    
    if (!result.data) return [];
    return result.data.map(
        (plant: Plant) => new Plant(
            plant.id,
            plant.title,
            plant.category,
            plant.description,
            plant.usage,
            plant.exposure,
            plant.temperatureRange,
            plant.terrainType,
            plant.transplant,
            plant.fertilization,
            plant.irrigation,
            plant.colturalCare,
            plant.harvesting,
            plant.imageUrl,
        )
    );
}