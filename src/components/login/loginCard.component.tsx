import { ChangeEvent, FormEvent, useState } from "react";
import md5 from "md5";
import { PiPlantLight } from "react-icons/pi";
import { UserRegistration } from "../registration/registration.component";

export interface IHeroLogin {
  onSubmission?: (data: string) => void;
}

export const HeroLogin: React.FC<IHeroLogin> = function ({
  onSubmission,
}: IHeroLogin) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email;
    password;

    if (onSubmission) {
      onSubmission(email);

      onSubmission(md5(password).toString());
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target;
    type == "password" ? setPassword(value) : setEmail(value);
  };
  return (
    <div className="hero bg-base-300 size-auto ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
          ✕
        </button>
        <div className="card flex flex-col w-full max-w-sm shadow-2xl bg-base-100 p-5">
          <div className="flex flex-row items-center">
            <PiPlantLight className="fill-green-700 border size-10 rounded-full border-green-800 m-3" />
            <h1 className="text-green-700 text-3xl m-2"> MaPiantala</h1>
            
          </div>
          <div className="text-center">
            <h1 className="text-2xl mt-2">Accedi</h1>
          </div>
          <form className="card-body rounded p-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                value={email}
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={handleChange}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Password dimenticata?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary">
                Accedi
              </button>
            </div>
          </form>
          <div className="form-control mt-4">
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
