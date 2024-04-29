import { IButtonProps } from "../button/Button.component";

export interface ICardProps {
    title: string;
    description: string;
    imageUrl?: string;
    username?: string
    imageUrlUser?: string
    Button?: React.ReactElement<IButtonProps>;
}

export const Card: React.FC<ICardProps> = function ({
    title,
    description,
    imageUrl,
    Button,
    username,
    imageUrlUser
}: ICardProps) {
    return (

        <div className="card size-6/12 bg-base-300 shadow-xl left-96 mt-4 mb-4  top-32">
            {imageUrlUser && username && (
                <div className="mx-4 my-4">

                    <div className="avatar">

                        <div className="w-10 rounded-full ">
                            <img src={imageUrlUser} />
                        </div>

                    </div>

                    <div className="badge badge-default mx-1 badge-lg ">{username}</div>
                </div>
            )}

            {imageUrl && (
                <figure className="px-10 pt-2">
                    <img src={imageUrl} alt={title} className="rounded-xl" />
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
