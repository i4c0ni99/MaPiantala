import md5 from "md5";
import { ChangeEvent, FormEvent, useState } from "react";
import { PiPlantLight } from "react-icons/pi";
import { UserImage } from "../image-profile/image-profile.component";

export interface IHeroRegister {
  onSubmission?: (data: string) => void;
}

export const HeroRegister: React.FC<IHeroRegister> = function ({
  onSubmission,
}: IHeroRegister) {
  const [firstname, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verifyPassword, setVerifyPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email;
    password;
    verifyPassword;

    if (onSubmission) {
      onSubmission(email);
      onSubmission(md5(password).toString());
      onSubmission(md5(verifyPassword).toString());
    }
  };

  const handleChangeVerifyPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyPassword(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target;
    type == "password" ? setPassword(value) : setEmail(value);
  };

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <div className="card hero bg-base-300 size-full ">
      <form method="dialog"  className="card-body">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
          ✕
        </button>
        <div className="hero-content flex-col rounded-lg ">
          <div className="flex flex-row items-center">
            <PiPlantLight className="fill-green-700 border size-10 rounded-full border-green-800 m-3" />
            <h1 className="text-green-700 text-3xl m-2">MaPiantala</h1>
          </div>
          <div className="text-center">
            <h1 className="text-2xl mt-2">Registra</h1>
          </div>
          <div className="card w-auto max-w-sm">
            <div
              className="h-96 overflow-y-auto scrollbar-hide mb-2 rounded-lg mr-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  type="text"
                  placeholder="Nome"
                  value={firstname}
                  className="input input-bordered"
                  onChange={handleChangeFirstName}
                  //required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cognome</span>
                </label>
                <input
                  type="text"
                  placeholder="Cognome"
                  value={lastName}
                  className="input input-bordered"
                  onChange={handleChangeLastName}
                  //required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  className="input input-bordered"
                  onChange={handleChange}
                  //required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Almeno 6 caratteri"
                  className="input input-bordered"
                  value={password}
                  onChange={handleChange}
                  //required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Verifica Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Riscrivi password"
                  className="input input-bordered"
                  value={verifyPassword}
                  onChange={handleChangeVerifyPassword}
                  //required
                />
              </div>
              <div className="form-control">
                <UserImage />
              </div>
            </div>

            <p className="items-start mx-8">
              Disponi già di un account MaPiantala?
            </p>
            <a
              onClick={() =>
                (
                  document.getElementById("my_modal_3") as HTMLDialogElement
                ).showModal()
              }
              className="items-start mx-8 my-4 underline hover:text-blue-500"
            >
              {"->"} Accedi
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
