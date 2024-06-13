import { Link } from "react-router-dom";
import { Plant } from "../../types/Plant.class";


interface IPlantCard {
    plant: Plant
}

export const PlantCard: React.FC<IPlantCard> = function ({ plant }) {
    return (<div className="card w-96 bg-base-300 shadow-xl">
        <Link rel="stylesheet" to={`/plants/${plant.id}`} key={plant.id} >
            <figure ><img className=" w-96 h-44" src={plant.imageUrl} /></figure>
        </Link>
        <div className="card-body">
            <h2 className="card-title">
                {plant.title}
            </h2>
            <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Descrizione
                </div>
                <div className="collapse-content">
                    <p>{plant.description}</p>
                </div>
            </div>


        </div>
    </div>)
}