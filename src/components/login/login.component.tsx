import { useEffect, useState } from "react";
import { HeroLogin } from "./loginCard.component";
import ky from 'ky';

export const LoginModal = function () {
const [passName,setPassName] = useState ({})
    useEffect(() => {
         ky.post('http://localhost:3000/user/signin',{json : passName})
      }, [passName]);
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
            onSubmission={async (data) =>
            {
            setPassName(data)
            console.log(data)
            }
            }
          />
        </div>
      </dialog>
    </>
  );
};