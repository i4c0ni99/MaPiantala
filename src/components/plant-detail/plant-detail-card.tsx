import { Plant } from "../../types/Plant.class";

interface ICardDetailPlant {
    plant?: Plant
}

export const PlantCardDetail: React.FC<ICardDetailPlant> = function ({ plant }) {
    if (plant) {
        return (
            <div className="hero min-h-screen min-w-screen bg-base-200 rounded-2xl" style={{ backgroundImage: `url(${plant.imageUrl})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-justify pt-32 ">
                    <div className="size-full">
                        <h1 className="mb-5 text-center text-5xl font-bold ">{plant.title}</h1>
                        <p className="mb-5">{plant.description}</p>

                        <div className="flex gap-8 mt-16">
                            <div className="w-1/2">
                                <h1 className="mb-5 text-3xl text-center  font-bold">{"Utilizzo"}</h1>
                                <p className="mb-5 text-justify">{plant.usage}</p>
                            </div>
                            <div className="w-1/2">
                                <h1 className="mb-5 text-3xl text-center font-bold">{"Esposizione"}</h1>
                                <p className="mb-5 text-justify">{plant.exposure}</p>
                            </div>
                        </div>
                        <h1 className="mb-5 text-3xl text-center  font-bold">{"Tipo di terrano"}</h1>
                        <p className="mb-5 text-justify">{plant.terrainType}</p>
                        <div className="flex gap-8 mt-16">
                            <div className="w-1/2">
                                <h1 className="mb-5 text-3xl text-center  font-bold">{"Distanza tra le piante"}</h1>
                                <p className="mb-5 text-justify">{plant.transplant}</p>
                            </div>
                            <div className="w-1/2">
                                <h1 className="mb-5 text-3xl text-center font-bold">{"Temperatura"}</h1>
                                <p className="mb-5 text-justify">{plant.temperatureRange}</p>
                            </div>
                        </div>
                        <h1 className="mb-5 text-3xl text-center font-bold">{"Temperatura"}</h1>
                        <p className="mb-5 text-justify">{plant.irrigation}</p>
                        <div className="flex gap-8 mt-16">
                            <div className="w-1/2">
                                <h1 className="mb-5 text-3xl text-center  font-bold">{"Cura"}</h1>
                                <p className="mb-5 text-justify">{plant.colturalCare}</p>
                            </div>
                            <div className="w-1/2">
                                <h1 className="mb-5 text-3xl text-center  font-bold">{"Raccolta"}</h1>
                                <p className="mb-5 text-justify">{plant.harvesting}</p>
                            </div>
                        </div>
                        <h1 className="mb-5 text-3xl text-center  font-bold">{"Distanza tra le piante"}</h1>
                        <p className="mb-5 text-justify">{plant.fertilization}</p>
                    </div>
                </div>
            </div>

        )
    }
}