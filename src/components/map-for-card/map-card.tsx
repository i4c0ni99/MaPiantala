import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps"
import { Terrain } from "../../types/terrain.class"




export interface IMapCard {
    obj: Object


}

/* type Props = {
    type: "map"
    data: string
} | {
    type: "event"
    data: number
}

const a = {} as any as Props

if(a.type === "event"){
    const b = a.data
} */
export const MapCard: React.FC<IMapCard> = function ({ obj }) {

   
   
        const terrain = obj as Terrain
        console.log(terrain)
        return (
            <>
                <APIProvider apiKey={"AIzaSyDmRC46vKa33hycgqlvbMMzZifuvohGgj4"} onLoad={() => console.log('Maps API has loaded.')}>
                    <div className="size-full rounded-3xl">
                        <Map zoom={17} center={{ lat: terrain.latitude, lng: terrain.longitude }} mapId={"943d3adef430e416"} >
                            <AdvancedMarker position={{ lat: terrain.latitude, lng: terrain.longitude }} />
                        </Map>
                    </div>
                </APIProvider>
            </>

        )
    
}


