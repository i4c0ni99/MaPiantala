import { CreateEditEvent } from "../components/create-edit-event/create-edit-event.component";
import { User } from "../types/User.class";
import { Event } from "../types/Event.class";

export function EventUpsert() {
  return (
    <>
      <div className="size-3/4 mx-auto pt-32">
        <CreateEditEvent
          eventCreated={
            new Event(
              0,
              0,
              "",
              "",
              "",
              new Date(),
              new User(
                5,
                "i4c0ni99@gmail.com",
                "",
                "Gigi",
                "Iaconi",
                "i4c0ni99",
                "",
                "",
                false,
                "",
              ),
              [],
              "",
              true
            )
          }
          onSubmission={(data: Event) => console.log("AA", data)}
        />
      </div>
    </>
  );
}
