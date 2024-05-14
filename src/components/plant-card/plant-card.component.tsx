import { Plant } from "../../types/Plant.class";


interface IPlantCard {
    plant: Plant
}

export const PlantCard: React.FC<IPlantCard> = function ({ plant }) {
    return (<div className="card w-96 bg-base-300 shadow-xl">
        <figure ><img className=" w-96 h-44"src={plant.imagePlant}  /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {plant.name}
            </h2>
            <p>{plant.description}</p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">{plant.growthPeriod}</div>
                <div className="badge badge-outline">{plant.type}</div>
            </div>
        </div>
    </div>)
}