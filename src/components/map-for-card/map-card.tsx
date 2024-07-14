import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { Terrain } from "../../types/Terrain.class";
export interface IMapCard {
    obj: Object;
}

export const MapCard: React.FC<IMapCard> = function ({ obj }) {
    const terrain = obj as Terrain;
    return (
        <>
            <APIProvider
                apiKey={"AIzaSyDmRC46vKa33hycgqlvbMMzZifuvohGgj4"}
                onLoad={() => console.log("Maps API has loaded.")}
            >
                <div className="size-full rounded-3xl">
                    <Map
                        zoom={17}
                        center={{
                            lat: terrain.latitude,
                            lng: terrain.longitude,
                        }}
                        mapId={"943d3adef430e416"}
                    >
                        <AdvancedMarker
                            position={{
                                lat: terrain.latitude,
                                lng: terrain.longitude,
                            }}
                        />
                    </Map>
                </div>
            </APIProvider>
        </>
    );
};
