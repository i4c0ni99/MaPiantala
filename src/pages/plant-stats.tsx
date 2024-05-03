import { useEffect, useState } from "react";

import { Plant } from "../types/Plant.class";
import { getPlantsMock } from "../mocks/getPlants.mock";
import { WaterCard } from "../components/plant-stats/plant-stats.component";

export function PlantStats() {
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



    return <>
        <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36"><a href="/terrain-upsert">+</a></button>

        <main className="w-6/12 mx-auto">

            {/* mettere filtraggio in base allo stato della pianta */}
            {plants.map((event) =>
                <div className="mt-8">
                    <WaterCard plant={event} />
                </div>
            )
            }

        </main>
    </>
}   