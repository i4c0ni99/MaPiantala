import { Button } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import { Card } from "../components/card/Card.component";
import { Navbar } from "../components/navbar/navbar.component";

export function TestComponent() {
    const onButtonClick = (index: number) => {
        console.log("Button clicked", index);
    };

    const cardButton = (
        <Button
            text="Card Button"
            style={ButtonType.Accent}
            onButtonClick={() => {
                console.log("fu");
            }}
        />
    );

    const buttonsAvailable: ButtonType[] = [
        ButtonType.Accent,
        ButtonType.Ghost,
        ButtonType.Link,
        ButtonType.Neutral,
        ButtonType.Primary,
        ButtonType.Secondary,
    ];

    return (
        <>
            {buttonsAvailable.map((buttonType, index) => (
                <Button
                    key={index}
                    text="Button"
                    style={buttonType}
                    onButtonClick={() => onButtonClick(index)}
                />
            ))}

            <Card
                title={"Card 1"}
                description={"Lorem Card"}
                Button={cardButton}
            ></Card>

            <Navbar></Navbar>
        </>
    );
}
