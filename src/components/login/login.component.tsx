import { HeroLogin } from "./loginCard.compnent"


export interface ILoginModal {
    // user: User,

}


export const LoginModal: React.FC<ILoginModal> = function ({
    //   user
}: ILoginModal) {
    return (
        <>
            <li>< a onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>login</a ></li>

            <dialog id="my_modal_3" className=" modal size-3/4 mx-auto" >
                <div className="size-3/4">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
                    </form>

                    <HeroLogin onSubmission={(data: string) => console.log("login component", data)} />
                </div>
            </dialog>
        </>
    )
}