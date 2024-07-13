import { ChangeEvent, useEffect, useState } from "react";
import { PlantCard } from "../components/plant-card/plant-card.component";
import { Plant } from "../types/Plant.class";
import { getPlants, searchPlant } from "../services/plants.service";
import { Link } from "react-router-dom";




export function PlantPage() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const[find,setFind] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
            
                     
                const plants: Plant[] = await getPlants();
                setPlants(plants);
                if (find != ''){
                console.log("find",find)    
                setPlants(await searchPlant(find))
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [find]);
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
                setFind(e.target.value)
    }
    return (
        <>
            <Link rel="stylesheet" to={`/plant-upsert/`}  >
                <button className="btn btn-outline btn-circle btn-lg btn-accent z-50 fixed text-2xl bottom-8 right-36" >+</button>
            </Link>
            <div className="  lg:{ fixed h-10 w-64 z-50 mt-12 left-32 ml-4} sm:{h-10 w-64 mt-24}">
                <label className="input input-bordered flex items-center gap-2  size-full">
                    <input type="text" className="grow" placeholder="Search" onChange={handleChange} value={find}/>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="flex flex-auto gap-4 flex-wrap place-content-center pt-32">
                {plants.map((plant) =>
                    <PlantCard plant={plant} />

                )}
            </div>
        </>

    )
}