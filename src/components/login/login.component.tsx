

import { HeroLogin } from "./loginCard.component";
import { axiosInstance, setAuthToken } from "../../utils/axiosInstance";
import { useContext } from "react";
import { MyContext } from "../../services/MyContext";


export const LoginModal = function () {
const {data,setData} = useContext(MyContext)
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
                            const respone = await axiosInstance.post('http://localhost:3000/user/signin', submitted)
                            setAuthToken(respone.data['token'])
                            const user = await axiosInstance.get("/user/me")
                            setData({
                              token: respone.data['token'],
                              user:user.data
                            })
                            console.log(data)
                        }
                        }
                    />
                </div>
            </dialog>
        </>
    );
