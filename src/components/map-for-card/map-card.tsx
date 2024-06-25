import { APIProvider, AdvancedMarker, Map, useMapsLibrary } from "@vis.gl/react-google-maps"
import { Terrain } from "../../types/terrain.class"
import { Event } from "../../types/Event.class"
import { useEffect, useState } from "react";



interface IMapCard {
    obj: Object


}


export const MapCard: React.FC<IMapCard> = function ({ obj }) {


    if (obj instanceof Terrain) {
        const terrain = obj as Terrain

        return (
            <>
                <APIProvider apiKey={"AIzaSyDmRC46vKa33hycgqlvbMMzZifuvohGgj4"} onLoad={() => console.log('Maps API has loaded.')}>
                    <div className="size-full rounded-3xl">
                        <Map zoom={17} center={{ lat: terrain.lat, lng: terrain.lng }} mapId={"943d3adef430e416"} >
                            <AdvancedMarker position={{ lat: terrain.lat, lng: terrain.lng }} />
                        </Map>
                    </div>
                </APIProvider>
            </>

        )

    } else {
        return " "
        /*  const event = obj as Event
         return (
             <>
                 <div className="size-full rounded-3xl">
                     <Map zoom={17} center={ {lat :terrain.lat, lng :terrain.lng}} mapId={"943d3adef430e416"} >
                         <AdvancedMarker position={{lat :terrain.lat, lng :terrain.lng}} />
                     </Map>
                 </div>
             </>
 
         ) */
    }
}




