import { ChangeEvent, MouseEvent, useState } from "react";
import { PiPlantLight } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { User } from "../../types/User.class";
import { HeroImageAccount } from "../image-profile/image-profileCard.component";

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

    setErrorMessage("");

    if (onSubmission) {
      onSubmission(user);
    }

    {isDialogVisible && (
      <dialog
        id="my_modal_5"
        className="modal max-sm: size-3/4 mx-auto my-auto"
        open
      >
        <div className="size-auto">
          <HeroImageAccount user={user} />
          <button
            className="btn btn-primary"
            onClick={() => setIsDialogVisible(false)}
          >
            Chiudi
          </button>
        </div>
      </dialog>
    )}
  };

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
    <div className="card hero bg-base-100 size-auto ">
      <div className="card flex flex-col w-full max-w-sm bg-base-100 p-5">
        <form>
          <div className="flex flex-row">
            <div className="flex flex-row w-full items-center">
              <PiPlantLight className="fill-green-700 border size-10 rounded-full border-green-800 m-3" />
              <h1 className="text-green-700 text-3xl m-2 size-3/4 text-center">
                {" "}
                MaPiantala
              </h1>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
              ✕
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-2xl my-2">Registra</h1>
          </div>
          {/* if there is a button in form, it will close the modal */}
          <div className="card w-auto max-w-sm">
            <div className="h-96 overflow-y-auto scrollbar-hide mb-2 rounded-lg mr-2">
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
              <div className="form-control mt-2 ml-16 justify-between flex flex-row">
                {/* <input
                    type="submit"
                    name="cancella"
                    value={"cancella"}
                    className="btn btn-error items-center flex-col mt-2"
                  /> */}
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary w-24"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="my-3"></div>
          </div>
          {errorMessage && (
            <div className="alert alert-error">
              <span>{errorMessage}</span>
            </div>
          )}
        </form>
        <p className="mr-8 my-2">Disponi già di un account MaPiantala?</p>
        <a
          onClick={() => {
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            ).showModal();
          }}
          className="mr-4 my-2 underline label-text-alt link link-hover hover:text-blue-500"
        >
          {"->"} Accedi
        </a>
      </div>
    </div>
  );
};
