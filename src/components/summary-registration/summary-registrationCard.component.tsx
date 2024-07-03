import { User } from "../../types/User.class";
import { Password } from "primereact/password";

export interface IHeroSummary {
  user: User;
}

const handleRegister = () => {
  
}

export const SummaryRegistration: React.FC<IHeroSummary> = function ({
  user,
}: IHeroSummary) {
  return (
    <>
      <div>
        <img className="mx-auto size-24" src={user.profilePicture} />
        <div className=" grid-cols-2 place-content-start my-3">
          <label>Nome</label>
          <p>{user.firstName}</p>
          <label>Cognome</label>
          <p>{user.lastName}</p>
          <label>Email</label>
          <p>{user.email}</p>
          <label>Password</label>
          <div className="card flex justify-content-center">
            <Password value={user.password} toggleMask />
          </div>
          <button onClick={handleRegister} className="">Registra</button>
        </div>
      </div>
    </>
  );
};
