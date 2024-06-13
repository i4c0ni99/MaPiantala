import { HeroLogin } from "./loginCard.component";

export const LoginModal = function () {
  return (
    <>
      <li>
        <a
          onClick={() =>
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            ).showModal()
          }
        >
          login
        </a>
      </li>

      <dialog id="my_modal_3" className=" modal w-3/4 h-full mx-auto">
        <div className="w-full h-auto ">
          <HeroLogin
            onSubmission={(data: string) =>
              console.log("login component", data)
            }
          />
        </div>
      </dialog>
    </>
  );
};