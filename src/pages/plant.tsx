import { useEffect, useState } from "react";
import { PlantCard } from "../components/plant-card/plant-card.component";
import { Plant } from "../types/Plant.class";
import { getPlantsMock } from "../mocks/getPlants.mock";


export function PlantPage() {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plants: Plant[] = await getPlantsMock();
                setPlants(plants);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" ><a href="/create-plant">+</a></button>
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32">
                {plants.map((plant) =>
                    <PlantCard plant={plant}></PlantCard>
                )}
            </div>
        </>

    )
}