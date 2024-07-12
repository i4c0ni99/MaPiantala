import { useEffect, useState } from "react";
import { PlantCard } from "../components/plant-card/plant-card.component";
import { Plant } from "../types/Plant.class";
import { getPlants } from "../services/plants.service";
import { Link } from "react-router-dom";




export function PlantPage() {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plants: Plant[] = await getPlants();
                setPlants(plants);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Link rel="stylesheet" to={`/plant-upsert/`}  >
                <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" >+</button>
            </Link>
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32">
                {plants.map((plant) =>
                    <PlantCard plant={plant} />

                )}
            </div>
        </>

    )
}