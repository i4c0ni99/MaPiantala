import { CreateEditPlant } from "../components/add-plant/create-plant.component";
import { Plant } from "../types/Plant.class";


export function PlantUpsert() {
    return (
        <div className="size-3/4 mx-auto pt-32">
            <CreateEditPlant
                onSubmission={(data: Plant) => console.log("AA", data)} />

        </div>
    )
}