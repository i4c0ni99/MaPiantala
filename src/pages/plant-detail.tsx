import { useEffect, useState } from "react";
import { Plant } from "../types/Plant.class";
import { PlantCardDetail } from "../components/plant-detail/plant-detail-card";
import { useParams } from "react-router-dom";
import { getPlantById } from "../services/plants.service";

export function PlantPageDetail() {

    const { plantId } = useParams()
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const plants: Plant[] = await getPlantById(plantId);
                setPlants(plants);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="mx-auto size-full">
            <PlantCardDetail plant={plants.find(plant => plant.id.toString() === plantId)} />
        </div>
    )

}
