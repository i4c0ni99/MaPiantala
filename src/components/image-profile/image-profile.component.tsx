import { HeroImageAccount } from "./image-profileCard.component";

export const UserImage: React.FC<{ onSubmission: (data: string) => void }> = ({
  onSubmission,
}) => {
  return (
    <>
      <button
        onClick={() =>
          (
            document.getElementById("my_modal_5") as HTMLDialogElement
          ).showModal()
        }
        className="btn btn-primary items-center flex-col mt-2"
      >
        Continua
      </button>
      <dialog
        id="my_modal_5"
        className="modal max-sm: size-3/4 mx-auto my-auto"
      >
        <div className="size-auto">
          <HeroImageAccount onSubmission={onSubmission} />
        </div>
      </dialog>
    </>
  );
};
