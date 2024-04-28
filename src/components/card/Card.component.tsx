import { IButtonProps } from "../button/Button.component";

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
        <div className="card w-96 bg-base-200 shadow-xl">
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
