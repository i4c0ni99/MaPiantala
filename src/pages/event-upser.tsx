import { CreateEditEvent } from "../components/create-edit-event/create-edit-event.component";
import { Event } from "../types/Event.class";
import GeocodingService from "../services/geocoding.service";
import { postEvent } from "../mocks/getEvents.mock";
import { EventCategory } from "../types/EventCategory.enum";
import { getCookie } from "../services/MaPiantalaCookies.service";

export function EventUpsert() {
    return <>
        <div className="size-3/4 mx-auto pt-32">
            <CreateEditEvent
                eventCreated={
                    new Event(
                        0, 0, '', '', '', new Date(),getCookie('user'), [], '', true, 0.0, 0.0, EventCategory.FOOD
                    )
                }
                onSubmission={async (data: Event) => {
                    const address = await GeocodingService.getCoordinates(data.address)
                    data.latitude = address.location.lat
                    data.longitude = address.location.lng
                    await postEvent(data)
                    window.location.href='/event'
                }} />

        </div>


    </>
  
}
