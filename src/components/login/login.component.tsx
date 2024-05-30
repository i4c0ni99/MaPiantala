import { User } from "../../types/User.class"
import { HeroLogin } from "./loginCard.component"

export const LoginModal = function () {
    return (
        <>
            <li>< a onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>login</a ></li>

            <dialog id="my_modal_3" className=" modal max-sm: size-3/4 mx-auto my-auto" >
                <div className="size-auto">
                    <HeroLogin onSubmission={(data: User) => console.log("login component", data)} />
                </div>
            </dialog>
        </>
    )
}