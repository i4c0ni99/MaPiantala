import { IButtonProps } from "../button/Button.component";

export interface ICardProps {
  description?: string;
  imageUrl?: string;
  Button?: React.ReactElement<IButtonProps>;
}

export const FormLogin: React.FC<ICardProps> = function () {
  return (
    <>
      <label className="input input-bordered input-accent flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="email" className="grow" placeholder="Email" />
      </label>

      <label className="input input-bordered input-accent flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input type="password" className="grow " />
      </label>

      <input
        type="date"
        className="input input-bordered input-accent w-full max-w-xs"
      />

      <input
        type="text"
        placeholder="Indirizzo"
        className="input input-bordered input-accent w-full max-w-xs"
      />
    </>
  );
};

export const FormTerrain: React.FC<ICardProps> = function () {
  return (
    <>
      <input
        type="text"
        placeholder="Nome Campo"
        className="input input-bordered input-accent w-full max-w-xs mt-3"
      />
      <input
        type="text"
        placeholder="Locazione"
        className="input input-bordered input-accent w-full max-w-xs"
      />

      <textarea
        className="textarea textarea-accent mb-3"
        placeholder="Descrizione"
      ></textarea>

      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Aggiungi
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Aggiunto terreno!</h3>
          <p className="py-4">Hai aggiunto il terreno con successo!</p>
        </div>
      </dialog>
    </>
  );
};
