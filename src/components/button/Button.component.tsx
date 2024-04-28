import { ButtonType } from "./button-types";

export interface IButtonProps {
    style?: ButtonType;
    text: string;
    onButtonClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({
    style,
    text,
    onButtonClick,
}: IButtonProps) => {
    return (
        <button onClick={onButtonClick} className={`btn ${style}`}>
            {text}
        </button>
    );
};

