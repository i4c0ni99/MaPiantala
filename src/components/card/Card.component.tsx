import { IButtonProps } from "../button/Button.component";
import CardForm, { FormTerrain } from "../form/Form.component";

export interface ICardProps {
  title: string;
  description: string;
  imageUrl?: string;
  Button?: React.ReactElement<IButtonProps>;
}

export const Card: React.FC<ICardProps> = function ({
  title,
  description,
  imageUrl,
  Button,
}: ICardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      {imageUrl && (
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        {Button}
      </div>
    </div>
  );
};

export const TerrainCard: React.FC<ICardProps> = function ({
  title,
  description,
  imageUrl,
}: ICardProps) {
  return (
    <>
<div>
</div>
    
      <div className="card lg:card-side w-6/12 m-3 bg-base-300 shadow-xl">
        <figure className="w-1/2">
          <img
            src={imageUrl}
            alt="Album"
            className="size-80 mr-16 h-full"
          />
        </figure>
        <div className="card-body">
          
          <h2 className="card-title">Aggiungi terreno</h2>
            <FormTerrain></FormTerrain>
        </div>
      </div>
    </>
    /*
    <div className="max-w-4xl max-h-4xl mx-auto bg-slate-700 rounded-xl m-5 shadow-md overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/2">
        <img className="w-32 h-32 md:w-full md:h-auto object-cover" src={imageUrl} alt="Immagine"/>
      </div>
      <div className="p-8 md:w-1/2">
        <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">{title}</div>
        <p className="mt-2 text-gray-500">{description}</p>
        <CardForm></CardForm>
      </div>
    </div>
  </div>
  */
  );
};
