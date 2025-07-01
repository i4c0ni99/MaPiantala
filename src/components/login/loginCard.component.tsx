import { ChangeEvent, FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiPlantLight } from "react-icons/pi";

export interface IHeroLogin {
    onSubmission?: (data: unknown) => void;
}

export const HeroLogin: React.FC<IHeroLogin> = function ({
    onSubmission,
}: IHeroLogin) {
    // Simulated database for registered users

    // Function to find a user by email or username

    // Function to control if password is correct
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password.length < 6) {
            setErrorMessage("La password deve contenere almeno 6 caratteri.");
            return;
        }

        if (onSubmission) {
            onSubmission({ email: email, password: password });
        }
    };

    const cleanError = () => {
        setErrorMessage("");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        name == "password" ? setPassword(value) : setEmail(value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero bg-base-300 size-full ">
            <div className="hero-content flex-col">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        onClick={cleanError}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-30 "
                    >
                        ✕
                    </button>
                </form>
                <div className="text-center mt-2 size-full">
                    <div className="flex flex-row items-center size-full">
                        <div className="flex w-full mb-2 items-center">
                            <div className="border-2 border-accent rounded-full">
                                <PiPlantLight className="fill-accent px-2 size-12 " />
                            </div>
                            <h1 className="text-accent text-3xl lg:text-5xl size-full text-center">
                                MaPiantala
                            </h1>
                        </div>
                    </div>
                    <div className="divider divider-accent " />

                    <div className="sm:flex flex-row-reverse items-center">
                        <div className="mx-10">
                            <h1 className="text-2xl lg:text-5xl mb-2 font-bold ">
                                Accedi ora!
                            </h1>
                            <p className="py-2 mt-2 hidden sm:block text-sm text-left">
                                <li className="mt-8">
                                    Accedi per Trasformare il Tuo Pollice Verde!
                                    Benvenuti su MaPiantala, l'applicazione
                                    definitiva per gli amanti delle piante!
                                </li>
                                <li className="mt-2">
                                    {" "}
                                    Per iniziare a esplorare il nostro vasto
                                    database di piante, ottenere consigli
                                    personalizzati sulla cura delle tue piante e
                                    connetterti con una comunità di
                                    appassionati, effettua l'accesso al tuo
                                    account.
                                </li>
                                <li className="mt-2">
                                    {" "}
                                    Con MaPiantala, il tuo giardino è sempre a
                                    portata di mano. Accedi ora e inizia a far
                                    crescere il tuo pollice verde!
                                </li>
                            </p>
                        </div>
                        <div className="card shadow-2xl bg-base-100 p-4 size-full">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">
                                            email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="username"
                                        value={email}
                                        className="input input-bordered input-accent"
                                        onChange={(e) => handleChange(e)}
                                        //required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Almeno 6 caratteri"
                                            name="password"
                                            value={password}
                                            className="input input-bordered input-accent w-full pr-10"
                                            onChange={(e) => handleChange(e)}
                                            //required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </button>
                                    </div>
                                    <label className="label">
                                        <a
                                            href="#"
                                            className="label-text-alt link link-hover"
                                        >
                                            Password dimenticata?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button
                                        type="submit"
                                        className="btn btn-outline btn-accent  my-3"
                                    >
                                        Accedi
                                    </button>
                                </div>
                            </form>

                            {errorMessage && (
                                <div
                                    role="alert"
                                    className="alert alert-error flex flex-row"
                                >
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

                            <div className="form-control">
                                <div className="divider divider-accent">
                                    Sei nuovo su MaPiantala?
                                </div>
                            </div>
                            <div className="form-control">
                                <a
                                    href="/registration"
                                    className="btn btn-outline btn-accent mx-2"
                                >
                                    Crea un nuovo account MaPiantala
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
