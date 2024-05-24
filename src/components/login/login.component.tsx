import { HeroLogin } from "./loginCard.component"


export interface ILoginModal {
    // user: User,

}


export const LoginModal: React.FC<ILoginModal> = function ({
    //   user
}: ILoginModal) {
    return (
        <>
            <li>< a onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>login</a ></li>

            <dialog id="my_modal_3" className=" modal max-sm: size-3/4 mx-8 my-auto" >
                <div className="size-auto">
                    <HeroLogin onSubmission={(data: string) => console.log("login component", data)} />
                </div>
            </dialog>
        </>
    )
}