import { ChangeEvent, FormEvent, useState } from "react";
import { PiPlantLight } from "react-icons/pi";
import { UserRegistration } from "../registration/registration.component";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { User } from "../../types/User.class";

export interface IHeroLogin {
  onSubmission?: (data: User) => void;
}

// Simulated database for registered users
const registeredUsers: User[] = [];

// Function to find a user by email or username
const findRegisteredUser = (
  email: string,
  username: string
): User | undefined => {
  return registeredUsers.find((user) => {
    user.email === email || user.username === username
      ? verifyPassword(user, user.password)
      : "";
  });
};

// Function to control if password is correct
const verifyPassword = (user: User, password: string) =>
  user.password === password;

export const HeroLogin: React.FC<IHeroLogin> = function ({
  onSubmission,
}: IHeroLogin) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    console.log("Form accesso");

    // Validazione password
    if (password.length < 6) {
      setErrorMessage("La password deve contenere almeno 6 caratteri.");
      return;
    }

    // Check if the user is registered
    const existingUser = findRegisteredUser(email, username);

    if (!existingUser) {
      setErrorMessage("Utente non è registrato");
      console.log("User not registered:", existingUser);
      return;
    }

    if (onSubmission) {
      onSubmission(existingUser);
    }

    setErrorMessage("");
  };

  const handleChangeEmailUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target;
    type == "email" ? setEmail(value) : setUsername(value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="card hero bg-base-100 size-auto ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}

        <div className="card flex flex-col w-full max-w-sm bg-base-100 p-5">
          <div className="flex flex-row">
            <div className="flex flex-row items-center">
              <PiPlantLight className="fill-green-700 border size-10 rounded-full border-green-800 m-3" />
              <h1 className="text-green-700 text-3xl m-2"> MaPiantala</h1>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
              ✕
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-2xl my-2">Accedi</h1>
          </div>
          <form className="card w-auto" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username o Email</span>
              </label>
              <input
                type={"text" || "email"}
                placeholder="Username o Email"
                value={username}
                className="input input-bordered"
                onChange={(e) => handleChangeEmailUsername(e)}
                //required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Almeno 6 caratteri"
                  value={password}
                  className="input input-bordered w-full pr-10"
                  onChange={(e) => handleChangePassword(e)}
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Password dimenticata?
                </a>
              </label>
            </div>
            <div>
              {errorMessage && (
                <div className="alert alert-error">
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-primary my-3">
                Accedi
              </button>
            </div>
          </form>
          <div className="form-control">
            <div className="divider divider-info">Sei nuovo su MaPiantala?</div>
          </div>
          <div className="form-control">
            <UserRegistration />
          </div>
        </div>
      </form>
    </div>
  );
};
