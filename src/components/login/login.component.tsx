import { HeroLogin } from "./loginCard.component";
import { axiosInstance } from "../../utils/axiosInstance";
import {
  getCookie,
  setToken,
  setUserCookie,
} from "../../services/MaPiantalaCookies.service";
import { useEffect } from "react";
import { getUser } from "../../services/users.service";

export const LoginModal = function () {
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setUserCookie(user);
      console.log(getCookie("user"));
    };

    fetchData();
  }, []);
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
            onSubmission={async (submitted) => {
              const response = await axiosInstance.post(
                "user/signin",
                submitted
              );
              setToken(response.data["token"]);
              window.location.href = '/home'
            }}
          />
        </div>
      </dialog>
    </>
  );
};
