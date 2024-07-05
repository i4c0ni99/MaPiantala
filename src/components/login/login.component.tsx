import { useEffect, useState } from "react";
import { HeroLogin } from "./loginCard.component";
import ky from 'ky';
import { axiosInstance } from "../../utils/axiosInstance";

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
                        onSubmission={async (data) => {
                            const respone = await axiosInstance.post('http://localhost:3000/user/signin', data)
                            console.log(respone)
                        }
                        }
                    />
                </div>
            </dialog>
        </>
    );
};