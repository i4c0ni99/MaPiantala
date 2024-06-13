import { APIProvider, AdvancedMarker, Map, useMapsLibrary } from "@vis.gl/react-google-maps"
import { Terrain } from "../../types/Terrain.class"
import { Event } from "../../types/Event.class"
import { useEffect, useState } from "react";



interface IMapCard {
    obj: Object


}


export const GeoCoding: React.FC<IMapCard> = function ({ obj }) {

    const geocodingApiLoaded = useMapsLibrary("geocoding")
    const [geocodingService, setGeocodingService] = useState<google.maps.Geocoder>()
    const [geocodingResult, setGeocodingResult] = useState<google.maps.GeocoderResult>()
    
    if (obj instanceof Terrain) {
        const terrain = obj as Terrain
        const [address, _setAddress] = useState(terrain.position)
        console.log(terrain)
        useEffect(() => {
            if (!geocodingApiLoaded) return;
            setGeocodingService(new window.google.maps.Geocoder())
        }, [geocodingApiLoaded])
        useEffect(() => {
            if (!geocodingService || !address) return

            geocodingService.geocode({ address }, (result, status) => {
                if (result && status === "OK") {
                    setGeocodingResult(result[0])
                }
            })
        }, [geocodingService, address])

        if (geocodingResult) {
            return (
                <>
                    <div className="size-full rounded-3xl">
                        <Map zoom={17} center={geocodingResult.geometry.location} mapId={"943d3adef430e416"} >
                            <AdvancedMarker position={geocodingResult.geometry.location} />
                        </Map>
                    </div>
                </>

            )
        }
    } else {

        const event = obj as Event
        console.log(event)
        const [address, _setAddress] = useState(event.position)
        useEffect(() => {
            if (!geocodingApiLoaded) return;
            setGeocodingService(new window.google.maps.Geocoder())
        }, [geocodingApiLoaded])
        useEffect(() => {
            if (!geocodingService || !address) return

            geocodingService.geocode({ address }, (result, status) => {
                if (result && status === "OK") {
                    setGeocodingResult(result[0])
                }
            })
        }, [geocodingService, address])

        if (geocodingResult) {
            return (
                <>
                    <div className="size-full rounded-3xl">
                        <Map zoom={17} center={geocodingResult.geometry.location} mapId={"943d3adef430e416"} >
                            <AdvancedMarker position={geocodingResult.geometry.location} />
                        </Map>
                    </div>
                </>

            )
        }
    }
}
export const MapCard: React.FC<IMapCard> = function ({ obj }) {


    return (

        <APIProvider apiKey={"AIzaSyDmRC46vKa33hycgqlvbMMzZifuvohGgj4"} onLoad={() => console.log('Maps API has loaded.')}>
            <GeoCoding obj={obj}></GeoCoding>
        </APIProvider>
    )
}