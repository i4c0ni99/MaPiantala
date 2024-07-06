import { CreateEditEvent } from "../components/create-edit-event/create-edit-event.component";
import { User } from "../types/User.class";
import { Event } from "../types/Event.class";
import GeocodingService from "../services/geocoding.service";
import { postEvent } from "../mocks/getEvents.mock";
import { EventCategory } from "../types/EventCategory.enum";
import { useContext } from "react";
import { MyContext } from "../services/MyContext";

export function EventUpsert() {
    const userContext= useContext(MyContext)
    return <>
        <div className="size-3/4 mx-auto pt-32">
            <CreateEditEvent
                eventCreated={
                    new Event(
                        0, 0, '', '', '', new Date(),userContext.data.user, [], '', true, 0.0, 0.0, EventCategory.FOOD
                    )
                }
                onSubmission={async (data: Event) => {
                    const address = await GeocodingService.getCoordinates(data.address)
                    data.latitude = address.location.lat
                    data.longitude = address.location.lng
                    postEvent(data)
                }} />

        </div>


    </>
  
}
