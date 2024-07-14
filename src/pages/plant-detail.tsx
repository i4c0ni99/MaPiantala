import { useEffect, useState } from "react";
import { Plant } from "../types/Plant.class";
import { PlantCardDetail } from "../components/plant-detail/plant-detail-card";
import { useParams } from "react-router-dom";
import { getPlantById } from "../services/plants.service";

export function PlantPageDetail() {

    const { plantId } = useParams()
    const [plant, setPlant] = useState<Plant>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plant = await getPlantById(plantId);
                plant && setPlant(plant);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="mx-auto size-full">
            <PlantCardDetail plant={plant} />
        </div>
    )

}
