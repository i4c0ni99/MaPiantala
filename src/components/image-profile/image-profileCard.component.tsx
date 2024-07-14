import { ChangeEvent, MouseEvent, useState } from "react";
import { PiPlantLight } from "react-icons/pi";
import { User } from "../../types/User.class";

export interface IHeroImage {
    onSubmission?: (data: string) => void;
    user: User;
}

export const HeroImageAccount: React.FC<IHeroImage> = function ({
    onSubmission,
    user,
}: IHeroImage) {
    const [profilePicture, setProfilePicture] = useState<string>(
        "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
    );

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        user.profilePicture = profilePicture;
        console.log("Form submitted");

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
        <div className="hero bg-base-300 size-auto items-center ">
            <div className="card flex flex-col w-full max-w-sm p-5">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center">
                        <PiPlantLight className="fill-accent border size-10 rounded-full border-green-800 m-3" />
                        <h1 className="text-accent text-3xl m-2">
                            {" "}
                            MaPiantala
                        </h1>
                    </div>
                    {/* FIXME CHIUSURA SCHEDA NON FUNZIONA */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                        ✕
                    </button>
                </div>
                <h1 className="text-3xl m-2">Immagine account</h1>
                <form className="bg-base-100 p-4 rounded-lg">
                    <div className="mx-auto mt-2">
                        <img
                            alt="Immagine vuota"
                            className="size-24 rounded-full mx-auto"
                            src={profilePicture}
                        />
                    </div>
                    <input
                        type="file"
                        className="my-2 mx-auto"
                        onChange={handleChangeImage}
                    />
                    <div className="flex flex-row">
                        <p className=" text-accent w-auto my-2">
                            *L'immagine può anche non essere inserita
                        </p>
                    </div>
                    <button
                        className="btn btn-accent btn-outline w-auto ml-auto"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Riepilogo
                    </button>
                </form>
            </div>
        </div>
    );
};
