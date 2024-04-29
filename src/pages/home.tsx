import { Button } from "../components/button/Button.component";
import { ButtonType } from "../components/button/button-types";
import { Card } from "../components/card/card.component";
import { Navbar } from "../components/navbar/navbar.component";

export function Home() {
    const onButtonClick = (index: number) => {
        console.log("Button clicked", index);
    };

    const cardButton = (
        <Button
            text="Prenota"
            style={ButtonType.Accent}
            onButtonClick={() => {
                console.log("fu");
            }}
        />
    );
    const user = [{
        "title": "Sunset on the beach",
        "description": "A beautiful view of the sunset on the beach",
        "imageUrl": "https://www.tgtourism.tv/wp-content/uploads/2017/09/agricoltur-campi.jpeg",
        "username": "beachlover",
        "imageUrlUser": "https://example.com/beachlover.jpg"
    },
    {
        "title": "Mountain landscape",
        "description": "Scenic view of the mountains",
        "imageUrl": "https://www.lucagino.it/wp-content/uploads/2017/08/campi-grano-val-d-orcia-tramonto.jpg",
        "username": "mountainhiker",
        "imageUrlUser": "https://example.com/mountainhiker.jpg"
    },
    {
        "title": "City skyline",
        "description": "Panoramic view of the city skyline",
        "imageUrl": "https://blog.necrologi-italia.it/wp-content/uploads/2021/02/Campi-Elisi-il-paradiso-degli-antichi-secondo-la-mitologia.jpg",
        "username": "cityexplorer",
        "imageUrlUser": "https://example.com/cityexplorer.jpg"
    },
    {
        "title": "Lush green forest",
        "description": "Tranquil forest landscape",
        "imageUrl": "https://www.guidatorino.com/wp-content/uploads/2019/07/campi-girasole-piemonte.jpg",
        "username": "naturelover",
        "imageUrlUser": "https://example.com/naturelover.jpg"
    },
    {
        "title": "Colorful hot air balloons",
        "description": "Vibrant hot air balloons flying in the sky",
        "imageUrl": "https://statics.cedscdn.it/photos/MED_HIGH/66/82/7696682_16220820_grano.jpg",
        "username": "balloonenthusiast",
        "imageUrlUser": "https://example.com/balloonenthusiast.jpg"
    },
    {
        "title": "Ancient ruins",
        "description": "Historical ruins from a bygone era",
        "imageUrl": "https://st.depositphotos.com/1158226/2657/i/450/depositphotos_26578407-stock-photo-green-fields-of-wheat-in.jpg",
        "username": "historybuff",
        "imageUrlUser": "https://example.com/historybuff.jpg"
    }]
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
            <div className="w-3/4 my-2 mx-36 fixed z-50 ">
                <Navbar></Navbar>
            </div>
            {user.map(function (card) {
                return (
                    <>

                        <Card
                            title={card.title}
                            description={card.description}
                            Button={cardButton}
                            imageUrl={card.imageUrl}
                            imageUrlUser="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                            username={card.username}
                        ></Card>
                    </>
                )

            })}

        </>
    );
}
