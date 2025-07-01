import { CreateEditPlant } from "../components/add-plant/create-plant.component";
import { postPlant } from "../services/plants.service";
import { Plant } from "../types/Plant.class";


export function PlantUpsert() {
    return (
        <div className="size-3/4 mx-auto pt-32">
            <CreateEditPlant
                onSubmission={async (data: Plant) =>
                    await postPlant(data)
                } />

        </div>
    )
}