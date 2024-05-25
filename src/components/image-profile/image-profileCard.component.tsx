import { ChangeEvent, MouseEvent, useState } from "react";
import { IHeroRegister } from "../registration/registrationCard.component";

export const HeroImageAccount: React.FC<IHeroRegister> = function ({
  onSubmission,
}: IHeroRegister) {
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
  );

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onSubmission) {
      onSubmission(profilePicture);
    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setProfilePicture(fileReader.result as string);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="card hero bg-base-300 size-full p-5 ">
      <form className="flex flex-col">
        <h1 className="text-3xl m-2">Inserisci immagine account</h1>
        <div className="mx-auto mt-2 ">
          <img
            alt="Immagine vuota"
            className="size-24 rounded-full"
            src={profilePicture}
          />
        </div>
        <input
          type="file"
          className="my-2 mx-auto"
          onChange={handleChangeImage}
        />
        <div className="flex flex-row">
          <p className=" text-info w-auto my-2">
            *L'immagine può anche non essere inserita
          </p>
        </div>
        <button className="btn btn-primary w-auto ml-auto" onClick={handleSubmit}>
          Riepilogo
        </button>
      </form>
    </div>
  );
};
