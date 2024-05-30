import { ChangeEvent, MouseEvent, useState } from "react";
import { PiPlantLight } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { User } from "../../types/User.class";
import { UserImage } from "../image-profile/image-profile.component";

export interface IHeroRegister {
  onSubmission?: (data: User) => User;
  user: User;
}

// Simulated database for registered users
const registeredUsers: User[] = [];

// Function to find a registered user by email
const findRegisteredUser = (
  email: string,
  username: string
): User | undefined => {
  return registeredUsers.find(
    (user) => user.email === email || user.username === username
  );
};

export const HeroRegister: React.FC<IHeroRegister> = function ({
  onSubmission,
  user,
}: IHeroRegister) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");
  const [showVerifyPassword, setShowVerifyPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  /*  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>(""); */

  const [newUser, setUser] = useState<User>(user);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    user = new User(
      newUser.email,
      newUser.firstName,
      newUser.lastName,
      newUser.username,
      newUser.password,
      false
    );

    // Check if the user is already registered
    const existingUser = findRegisteredUser(email, username);

    if (existingUser) {
      setErrorMessage("Utente è già registrato");
      console.log("User is already registered:", existingUser);
      return;
    }

    // Validazione password
    if (password.length < 6) {
      setErrorMessage("La password deve contenere almeno 6 caratteri.");
      return;
    }
    if (password !== verifyPassword) {
      setErrorMessage("Le password non coincidono.");
      return;
    }

    cleanError;

    if (onSubmission) {
      onSubmission(user);
    }

    setIsDialogVisible(true);
    
  };

  const cleanError = () => {
    setErrorMessage("");
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "email") setEmail(value);
    if (name == "password") setPassword(value);
    if (name == "username") setUsername(value);
    if (name == "verifyPassword") setVerifyPassword(value);
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
  /* const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeVerifyPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyPassword(e.target.value);
  };

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

 ; */

  /* const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    setUsername("");
    setEmail("");
    setPassword("");
    setVerifyPassword("");
    setErrorMessage("");
  }; */

  /* if (isDialogVisible) return <UserImage user={user} />;
  else */
  return (
    <div className="hero bg-base-300 size-full">
      <div className="hero-content flex-col">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={cleanError} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-30 ">
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
          <div className="divider divider-accent" />

          <div className="sm:flex flex-row-reverse items-center">
            <div className="mx-10">
              <h1 className="text-2xl lg:text-5xl mb-2 font-bold">
                Registrati!
              </h1>
              <p className="py-2 mt-2 hidden sm:block text-sm text-left">
                <li className="mt-8">
                  Entra a far parte della nostra famiglia, dove potrai esplorare
                  e coltivare numerose piante.
                </li>
                <li className="mt-2">
                  {" "}
                  Per iniziare a esplorare il nostro vasto database di piante,
                  ottenere consigli personalizzati sulla cura delle tue piante e
                  connetterti con una comunità di appassionati, effettua
                  l'accesso al tuo account.
                </li>
                <li className="mt-2">
                  {" "}
                  Con MaPiantala, il tuo giardino è sempre a portata di mano.
                  Accedi ora e inizia a far crescere il tuo pollice verde!
                </li>
              </p>
            </div>

            <div className="card shadow-2xl bg-base-100 p-4 size-full">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className=" h-72 overflow-y-auto scrollbar-hide"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nome*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nome"
                    name="firstName"
                    value={newUser.firstName}
                    className="input input-bordered"
                    onChange={(e) => handleChange(e)}
                    //required
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
                    value={newUser.lastName}
                    className="input input-bordered"
                    onChange={(e) => handleChange(e)}
                    //required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={newUser.username}
                    className="input input-bordered"
                    onChange={(e) => handleChange(e)}
                    //required
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
                    value={newUser.email}
                    className="input input-bordered"
                    onChange={(e) => handleChange(e)}
                    //required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Almeno 6 caratteri"
                      name="password"
                      value={newUser.password}
                      className="input input-bordered w-full pr-10"
                      onChange={(e) => handleChange(e)}
                      //required
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
                    <span className="label-text">Verifica Password*</span>
                  </label>
                  <div className="relative form-control">
                    <input
                      type={showVerifyPassword ? "text" : "password"}
                      placeholder="Riscrivi password"
                      name="verifyPassword"
                      value={verifyPassword}
                      className="input input-bordered w-full pr-10"
                      onChange={(e) => handleChange(e)}
                      //required
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

                <div className="form-control mt-2 flex flex-row ">
                  {/* <input
                            type="submit"
                            name="cancella"
                            value={"cancella"}
                            className="btn btn-error items-center flex-col mt-2"
                          /> */}
                  <button
                    type="submit"
                    className="btn btn-accent my-2 btn-outline w-24"
                  >
                    Save
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
              <p className="my-3 text-left">
                Disponi già di un account MaPiantala?
              </p>
              <a
                onClick={() => {
                  (
                    document.getElementById("my_modal_3") as HTMLDialogElement
                  ).showModal();
                }}
                className="my-2 underline label-text-alt link link-accent"
              >
                {"->"} Accedi
              </a>
            </div>
          </div>
        </div>
        
      </div>
      {/* {isDialogVisible && (
        <UserImage user={user}/>
      )} */}
    </div>
  );
};
