import { User } from "../../types/User.class";
import { HeroRegister } from "./registrationCard.component";

export const UserRegistration = () => {
  return (
    <>
      <button
        onClick={() =>
          (
            document.getElementById("my_modal_4") as HTMLDialogElement
          ).showModal()
        }
        className="btn btn-outline btn-accent mx-2"
      >
        Crea un nuovo account MaPiantala
      </button>

      <dialog id="my_modal_4" className=" modal w-11/12 mx-auto">
        <div className="w-full h-auto">
          <HeroRegister user={new User('','','','','',false)}
            onSubmission={(data: User) => {
              console.log("registration component", data);
              return data;
            }}
          />
        </div>
      </dialog>
    </>
  );
};
