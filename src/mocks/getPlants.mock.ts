import { Plant } from "../types/Plant.class";


export function getPlantsMock(): Promise<Plant[]> {

    const garlic = new Plant(
        1,
        "Aglione (ecotipo della Val di Chiana)",
        "aglio",
        "L'Aglione della Valdichiana (A. ampeloprasum) è un'eccellenza toscana che da anni ha catalizzato l'interesse dei grandi Chef e più recentemente anche la curiosità di tanti appassionati dell'orto. È molto apprezzato il suo sapore estremamente delicato rispetto alle varietà comuni. Il grande bulbo in condizioni ottimali può raggiungere gli 800 gr di peso. Come ogni aglio che si rispetti tollera il freddo, sopportando anche le forti gelate. Nel mese di maggio la pianta emette lo scapo fiorale (bocciolo o \"tallo\") che deve essere tagliato al più presto (e che si può utilizzare in cucina). Il bulbo si raccoglie tra giugno e luglio, all’ingiallimento della vegetazione. In condizioni di stress ambientali (oppure in caso di carenze idrica o nutrizionale) l'aglione può formare un unico bulbo tondeggiante di piccole dimensioni, come le cipolle (che volendo si potrà mettere a dimora in autunno, per produrre un bellissimo aglione nella primavera successiva). Concimare l'Aglione con un buon fertilizzante NPK al momento dell'impianto, da distribuire nuovamente a fine inverno. In caso di siccità irrigare settimanalmente tra marzo e maggio, evitando i ristagni.",
        "Il sapore: nella gamma Orto Mio ci sono le varietà classiche (Allium sativum), dal sapore più e meno intenso: dal gusto marcato del bianco Garcua, al meno forte Gardos (tipo rosso di Sulmona), e anche il delicato Aglione (Allium ampeloprasum).",
        "L’aglio predilige l’esposizione in pieno sole, ma tollera posizioni di mezz’ombra per alcune ore nel corso della giornata.",
        "Pianta molto adattabile, l’aglio tollera le temperature rigide invernali (anche oltre -10°) e anche il caldo primaverile. La temperatura ottimale di accrescimento è di 15-25°, quella di bulbificazione di 18-20°.",
        "L’aglio predilige i terreni di medio impasto ben dotati in sostanza organica, ma non disdegna anche quelli poco argillosi. Gradisce pH preferibilmente tra 6-7, ma tollera i terreni calcarei. Nei suoli sabbiosi offre buoni risultati con concimazioni adeguate ed irrigazioni regolari in caso di siccità. I terreni molto pesanti (“forti” o argillosi) sono i meno adatti all’aglio, dove è necessario coltivarlo su aiuole rialzate. Un ottimo drenaggio permette di prevenire i ristagni che provocano il marciume dei bulbi. È consigliabile attendere 4 anni prima di trapiantare l’aglio (o altre liliacee come cipolla, porro, scalogno, ecc.) nei terreni dove lo si era coltivato in precedenza. Il terreno deve essere lavorato con la vanga per 25-30 cm di profondità (meglio arrivare a 40 cm per l’Aglione).",
        "Distanze: il sesto consigliato per le varietà classiche è di 15 cm sulle file e 30 cm tra le file, mentre l’Aglione si trapianta a distanza di 25 cm sulla fila e 50 cm tra le file.",
        "A differenza di quanto si possa credere, l’aglio richiede un’attenta concimazione per dare i migliori risultati (specialmente nei terreni meno fertili). La sostanza organica va gestita con attenzione, apportandola alla coltura precedente o al più tardi nell’autunno che precede la coltivazione dell’aglio, ma è da evitare in prossimità del trapianto. L’aglio si giova dell’apporto di zolfo. Le concimazioni azotate di copertura sono importanti, ma senza esagerare, per non provocare eccessi di vegetazione a discapito del bulbo.",
        "Le esigenze idriche dell’aglio variano in base alle caratteristiche del terreno, alla fase di sviluppo delle piante, alle temperature e all’andamento climatico. Bisogna essere pronti ad intervenire in caso di siccità per evitare forti stress alle piante. Nelle annate con precipitazioni regolari, normalmente l’acqua piovana è sufficiente per la coltura. Nelle primavere siccitose, nella fase di ingrossamento del bulbo (tra aprile e giugno), è fondamentale effettuare annaffiature settimanali, che garantiscano una maggiore accrescimento ma è fondamentale evitare gli eccessi idrici perchè l’aglio teme i ristagni.",
        "Sarchiatura: l’aglio richiede interventi periodici di zappettatura superficiale tra le file, che permettono di eliminare le malerbe ed ossigenare le radici.",
        "Una raccolta anticipata di aglio giovane si può effettuare tra maggio e i primi di giugno, quando la vegetazione è ancora verde ma i bulbi hanno già raggiunto una buona dimensione; l’aglio, raccolto così precocemente è da utilizzare in poche settimane, per consumo fresco.",
        "https://www.ortomio.it/public/prodotti/aglione_md.jpg"
       
    )
    
/*      // Esempio di pianta di verdura
 const vegetablePlant = new Plant(
     1,
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
     2,
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
     3,
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
     4,
     'Basilico',
     Type.Verdura,
     StatePlant.Crescita,
     GrowthPeriod.Estivo,
     new Date('2024-06-01'),
     'Il basilico è una pianta aromatica molto usata in cucina...',
     'https://wips.plug.it/cips/buonissimo.org/cms/2013/04/adobestock_171476971.jpeg'
 ); */
return new Promise((resolve) =>
    resolve([garlic])
)
}