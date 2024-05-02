import { ButtonType } from "./button-types";

export interface IButton {
    style?: ButtonType;
    text: string;
    onButtonClick: () => void;
}

export const Button: React.FC<IButton> = ({
    style,
    text,
    onButtonClick,
}: IButton) => {
    return (
        <button onClick={onButtonClick} className={`btn ${style} size-full`}>
            {text}
        </button>
    );
};

