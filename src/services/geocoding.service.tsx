

import React, { useEffect, useState } from "react";
import { Terrain } from "../types/terrain.class";
import { Event } from "../types/Event.class";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import ky from "ky";
import { json } from "react-router-dom";

export interface IGeocoder {
    obj: Object,
    

}


export const GeocodingService : React.FC<IGeocoder> = ({ obj }:IGeocoder) => {
    
    const geocodingApiLoaded = useMapsLibrary("geocoding");
    const [geocodingService, setGeocodingService] = useState<google.maps.Geocoder>();
    const [geocodingResult, setGeocodingResult] = useState<google.maps.GeocoderResult>();
    if (obj instanceof Terrain) {
        const terrain = obj as Terrain
        
        const [address, _setAddress] = useState(terrain.address);
        useEffect(() => {
            if (!geocodingApiLoaded) return;
            setGeocodingService(new window.google.maps.Geocoder());
            console.log(true)
        }, [geocodingApiLoaded]);
        useEffect(() => {
            if (!geocodingService || !address) return
            geocodingService.geocode({ address }, (result, status) => {
                if (result && status === "OK") {
                    setGeocodingResult(result[0]);
                    
                }
            });
        }, [geocodingService, address]);

        if (geocodingResult) {
            terrain.lat=
            terrain.lng=geocodingResult.geometry.location.lng()
            terrain.address=address
            console.log(terrain)
            const terrainJson={
                "id": 14,
                "title": terrain.title,
                "description": terrain.description,
                "latitude": geocodingResult.geometry.location.lat(),
                "longitude": geocodingResult.geometry.location.lng(),
                "address": address,
                "imageUrl": terrain.imageUrl,
                "userId": terrain.user.id
            }
            ky.post("http://localhost:3000/terrain",{json: terrainJson}).json()
            return(
            <></>
            )
        
        }
           
        
           
        
    } else {

        const event = obj as Event;
        console.log(event);
        const [address, _setAddress] = useState(event.position);
        useEffect(() => {
            if (!geocodingApiLoaded) return;
            setGeocodingService(new window.google.maps.Geocoder());
        }, [geocodingApiLoaded]);
        useEffect(() => {
            if (!geocodingService || !address) return;

            geocodingService.geocode({ address }, (result, status) => {
                if (result && status === "OK") {
                    setGeocodingResult(result[0]);
                }
            });
        }, [geocodingService, address]);

        if (geocodingResult) {
            return <><h1></h1></>
        }
    }
 
    


}





