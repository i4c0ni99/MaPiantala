import { ChangeEvent, FormEvent, useState } from "react";


import { PiPlantLight } from "react-icons/pi";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { User } from "../../types/User.class";

export interface IHeroSettings {

    onSubmission: (data: User) => void;
    oldUser: User;

}

// Simulated database for registered users


export const CardSettings: React.FC<IHeroSettings> = function ({
    onSubmission,
    oldUser,
}: IHeroSettings) {
    const [showVerifyPassword, setShowVerifyPassword] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [userModified, setUser] = useState<User>(oldUser);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validazione password
        if (userModified.password.length < 6) {
            setErrorMessage("La password deve contenere almeno 6 caratteri.");
            return;
        }

        cleanError();

        console.log("prima: " + oldUser);
        console.log("dopo: " + userModified);

        if (onSubmission) {
            onSubmission(userModified);
        }
    };

    const cleanError = () => {
        setErrorMessage("");
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleVerifyPasswordVisibility = () => {
        setShowVerifyPassword(!showVerifyPassword);
    };

    return (
        <div className="card bg-base-300 size-full">
            <div className="card-content flex-col mt-2">
                <div className="text-center mt-2 size-full">
                    <div className="items-center">
                        <div className="mx-10">
                            <h1 className="text-2xl lg:text-4xl m-5 font-bold">
                                Cambia credenziali profilo
                            </h1>
                        </div>

                        <div className="card shadow-2xl bg-base-300 p-4 size-full">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Nome*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nome"
                                        name="firstName"
                                        defaultValue={oldUser.firstName}
                                        className="input input-bordered"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Cognome*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Cognome"
                                        name="lastName"
                                        defaultValue={oldUser.lastName}
                                        className="input input-bordered"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        defaultValue={oldUser.email}
                                        className="input input-bordered"
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Immagine profilo</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Immagine del profilo"
                                        name="profilePicture"
                                        defaultValue={oldUser.profilePicture}
                                        className="input input-bordered"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Copertina Profilo</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Copertina del profilo"
                                        name="copertinePicture"
                                        defaultValue={oldUser.copertinePicture}
                                        className="input input-bordered"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Crea nuova password</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Almeno 6 caratteri"
                                            name="password"
                                            defaultValue={oldUser.password}
                                            className="input input-bordered w-full pr-10"
                                            onChange={(e) => handleChange(e)}
                                        />

                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Verifica nuova password*</span>
                                    </label>
                                    <div className="relative form-control">
                                        <input
                                            type={showVerifyPassword ? "text" : "password"}
                                            placeholder="Riscrivi password"
                                            name="passwordConfirm"
                                            className="input input-bordered w-full pr-10"
                                            onChange={(e) => handleChange(e)}
                                        />

                                        <button
                                            type="button"
                                            onClick={toggleVerifyPasswordVisibility}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showVerifyPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className=" my-2 ">
                                    <button
                                        type="submit"
                                        className="btn btn-accent mx-2 btn-outline size-auto"
                                    >
                                        Modifica
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-error mx-2 btn-outline size-auto"
                                    >
                                        Annulla
                                    </button>
                                </div>
                            </form>
                            {errorMessage && (
                                <div role="alert" className="alert alert-error flex felx-row">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{errorMessage}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );c
};
