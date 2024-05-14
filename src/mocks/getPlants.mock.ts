import { Plant } from "../types/Plant.class";
import { GrowthPeriod } from "../types/Plant.growthPeriod.enum";
import { StatePlant } from "../types/Plant.state.enum";
import { Type } from "../types/Plant.type.enum";

export function getPlantsMock(): Promise<Plant[]> {


    // Esempio di pianta di verdura
    const vegetablePlant = new Plant(
        'Pomodoro',
        Type.Verdura,
        StatePlant.Semina,
        GrowthPeriod.Primaverile,
        new Date('2024-03-15'),
        'Il pomodoro è una pianta orticola della famiglia delle Solanacee...',
        'https://www.cucchiaio.it/come-cucinare/wp-content/uploads/2021/06/CUC-come-cucinare-pomodori-facebook.jpg'
    );

    // Esempio di pianta di fiore
    const flowerPlant = new Plant(
        'Rosa',
        Type.Fiore,
        StatePlant.Crescita,
        GrowthPeriod.Stagionale,
        new Date('2024-05-01'),
        'La rosa è un genere di piante della famiglia delle Rosacee...',
        'https://www.laterradigaia.com/wp-content/uploads/2019/02/le-rose-san-valentino-la-terra-di-gaia-1.png'
    );

    // Esempio di pianta da frutto
    const fruitPlant = new Plant(
        'Mela',
        Type.Frutta,
        StatePlant.Raccolta,
        GrowthPeriod.Stagionale,
        new Date('2024-09-01'),
        'La mela è il frutto del melo, appartenente alla famiglia delle Rosacee...',
        'https://i0.wp.com/www.fruitbookmagazine.it/wp-content/uploads/2020/12/Mele-Royal-Gala-bio.jpg?ssl=1'
    );

    // Esempio di altra pianta con periodo estivo
    const summerPlant = new Plant(
        'Basilico',
        Type.Verdura,
        StatePlant.Crescita,
        GrowthPeriod.Estivo,
        new Date('2024-06-01'),
        'Il basilico è una pianta aromatica molto usata in cucina...',
        'https://wips.plug.it/cips/buonissimo.org/cms/2013/04/adobestock_171476971.jpeg'
    );
    return new Promise((resolve) =>
        resolve([summerPlant, fruitPlant, flowerPlant, vegetablePlant])
    )
}