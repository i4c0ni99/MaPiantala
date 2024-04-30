import { Terrain } from "../types/terrain.interface";

export function getTerrainsMock(): Promise<Terrain[]> {
    return new Promise((resolve) => {
        resolve([{
            title: "Sunset on the beach",
            description: "A beautiful view of the sunset on the beach",
            imageUrl: "https://www.tgtourism.tv/wp-content/uploads/2017/09/agricoltur-campi.jpeg",
            user: {
                username: "beachlover",
                email: "beachlover@email.com",
                firstName: "Mario",
                lastName: "Rossi",
                profilePicture: "https://example.com/beachlover.jpg"
            },
        },
        {
            title: "Mountain landscape",
            description: "Scenic view of the mountains",
            imageUrl: "https://www.lucagino.it/wp-content/uploads/2017/08/campi-grano-val-d-orcia-tramonto.jpg",
            user: {
                username: "mountainhiker",
                email: "mountainhiker@email.com",
                firstName: "Mario",
                lastName: "Rossi",
                profilePicture: "https://example.com/mountainhiker.jpg"
            },
        },
        {
            title: "City skyline",
            description: "Panoramic view of the city skyline",
            imageUrl: "https://blog.necrologi-italia.it/wp-content/uploads/2021/02/Campi-Elisi-il-paradiso-degli-antichi-secondo-la-mitologia.jpg",
            user: {
                username: "cityexplorer",
                email: "cityexplorer@email.com",
                firstName: "Mario",
                lastName: "Rossi",
                profilePicture: "https://example.com/cityexplorer.jpg"
            },
        },
        {
            title: "Lush green forest",
            description: "Tranquil forest landscape",
            imageUrl: "https://www.guidatorino.com/wp-content/uploads/2019/07/campi-girasole-piemonte.jpg",
            user: {
                username: "naturelover",
                email: "naturelover@email.com",
                firstName: "Mario",
                lastName: "Rossi",
                profilePicture: "https://example.com/naturelover.jpg"
            },
        },
        {
            title: "Colorful hot air balloons",
            description: "Vibrant hot air balloons flying in the sky",
            imageUrl: "https://statics.cedscdn.it/photos/MED_HIGH/66/82/7696682_16220820_grano.jpg",
            user: {
                username: "balloonenthusiast",
                email: "balloonenthusiast@email.com",
                firstName: "Mario",
                lastName: "Rossi",
                profilePicture: "https://example.com/balloonenthusiast.jpg"
            },
        },
        {
            title: "Ancient ruins",
            description: "Historical ruins from a bygone era",
            imageUrl: "https://st.depositphotos.com/1158226/2657/i/450/depositphotos_26578407-stock-photo-green-fields-of-wheat-in.jpg",
            user: {
                username: "historybuff",
                email: "historybuff@email.com",
                firstName: "Mario",
                lastName: "Rossi",
                profilePicture: "https://example.com/historybuff.jpg"
            },
        }]);
    });
}