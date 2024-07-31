-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Lug 31, 2024 alle 09:24
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crafty`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `descrizione` text DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `prezzo` double DEFAULT NULL,
  `qnt` int(11) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `product`
--

INSERT INTO `product` (`id`, `descrizione`, `nome`, `prezzo`, `qnt`, `category_id`) VALUES
(2, 'Arte da parete in vetro temperato per decorazioni per la casa-Stampa su vetro Arte-Vetro temperato Arte-Decorazioni da parete in vetro-Arazzi-Grande arte da parete rotonda-Arte delle stagioni', 'Arte da parete in vetro temperato', 55.8, 10, 1),
(3, 'Tovagliette colazione personalizzate - Idea regalo - Custom Placemats - Personalized - Christmas - San Valentino - Casa', 'Tovagliette colazione personalizzate', 9.3, 10, 1),
(4, 'Graziosa targa con le regole della casa, ottimo come regalo da fare con il cuore.\r\n\r\nÈ disponibile in tre dimensioni, ovviamente essendo un prodotto fatto a mano le dimensioni potrebbero variare di qualche centimetro.\r\n\r\nViene venduto con il cordino per appenderlo, come in foto.', 'Le regole della casa', 24, 10, 1),
(5, 'Cerchi un nuovo scaffale per aggiungere un po\' di carattere alla tua casa? Il nostro scaffale da montagna in legno a 5 picchi è la soluzione perfetta. I nostri scaffali sono realizzati in legno massello di pino e sono disponibili in una varietà di colori, quindi puoi trovarne quello che si adatta al tuo stile.\r\n\r\nScaffale in legno da montagna - 5 picchi - Arredamento rustico - Arredamento per la stanza dei bambini - Arredamento avventura', 'Scaffale in legno da montagna', 121.03, 10, 1),
(6, 'Fantastico portachiavi da muro, personalizzabile al 100%, tutto realizzato in legno, e molto bello da tenere a vista e fare invidia ai vostri amici.\r\n\r\nRealizzato in modo da non dover più cercare le chiavi in tutta la casa, soprattutto quando si va di fretta non si perdono mai.', 'Portachiavi da parete per famiglia', 18.03, 10, 1),
(7, 'Migliora il tuo spazio con un tocco dello stile iconico di Keith Haring. La nostra vibrante coperta cattura l\'essenza della sua arte dei graffiti, aggiungendo un\'esplosione di energia a qualsiasi stanza. Realizzato con cura e disponibile in due dimensioni, è il regalo perfetto per gli amanti dell\'arte e per coloro che apprezzano lo straordinario.\r\n\r\n•130 cm x 160 cm/ Peso: 1 000 grammi\r\n•160 cm x 220 cm / Peso 1 500 grammi\r\nSe preferisci:\r\n•51,1 pollici - 62,9 pollici / 2,1 libbre\r\n.62,9 pollici - 86,6 pollici / 3,3 libbre\r\n\r\nLavaggio: lavaggio a freddo\r\nSpedizione: Entro 1 giorno lavorativo. Ci impegniamo per l\'eco-compatibilità e utilizzeremo cartone riciclato per l\'imballaggio. Se avete domande, non esitate a contattarci per maggiori dettagli.', 'Coperta Hip Hop', 45.07, 10, 1),
(10, 'MAPPA DEL MONDO IN LEGNO\r\n\r\nLa mappa in legno aiuterà tuo figlio a ricordare la posizione corretta dei paesi e instillerà l\'amore per la geografia, decorerà l\'interno di un ufficio o di una casa e ti farà anche sognare di viaggiare in paesi nuovi e sconosciuti. Mettere insieme una mappa del mondo in legno è ancora più divertente se lo fai con tutta la famiglia.\r\n\r\nLa mappa del mondo in legno sarà anche un ottimo e originale regalo per i tuoi cari e i tuoi amici. Pensa a come sarebbe ricevere un regalo del genere!\r\n\r\nDETTAGLI\r\n. Realizzato a mano in compensato di betulla di alta qualità\r\n. Il nastro biadesivo (incluso) attacca la mappa al muro\r\n. Consegnato pronto per essere regalato\r\n. Facile da installare con le istruzioni incluse\r\n. Segna i tuoi viaggi con le puntine!\r\n. Incluse 50 etichette in legno incollate alla mappa del mondo su nastro biadesivo\r\n', 'Mappa del Mondo in legno', 128, 10, 1),
(11, 'Carlino stampato in 3d in low poly. Per dare un pò di simpatia e tenerezza al tuo soggiorno.\r\n \r\nAltezza: 30 cm.\r\n\r\nLarghezza: 7,6 cm.\r\n', 'statua cane arredo casa', 12.39, 10, 1),
(12, 'Le nostre corna di pecora sono lunghe circa 25-30 cm.\r\n\r\nLe corna delle pecore provengono dall\'Africa e vengono allevate dagli agricoltori per il consumo.\r\n\r\nPoiché sono un prodotto naturale, possono variare in dimensioni, colore e forma!\r\n\r\nLe corna di pecora possono essere utilizzate per scopi creativi, come oggetto da collezione o come decorazione per il soggiorno, la camera da letto o il bagno.\r\n\r\nPuò anche essere facilmente combinato con altri articoli nel nostro negozio!', 'Corno di pecora naturale', 15.8, 10, 1),
(13, 'Lampada fatta con bottiglia di Gin Mare , senza fili, accensione luce touch, racchiude sia luce calda che luce fredda\r\nlampada ricaricabile con apposito filo che esce all\' interno', 'Lampada Gin Mare', 50.89, 10, 1),
(14, 'Collana di perline etniche turche per donne Gioielli persiani fatti a mano\r\n\r\nLunghezza della collana: 45 centimetri/ 18 pollici\r\nChiusura: artiglio di aragosta\r\nStile catena: perlina\r\nLunghezza regolabile\r\nStile: boho e hippie\r\n', 'Collana di perline etniche turche', 27.05, 10, 2),
(15, 'La nostra collana artigianale è realizzata con amore e cura dai nostri esperti artigiani. Ogni pezzo è unico, poiché i fiori di Myosotis, conosciuti anche come \"non ti scordar di me\", sono selezionati e raccolti a mano per preservare la loro bellezza e delicatezza. Ogni fiore viene poi incastonato nella resina, che esalta ulteriormente la sua luminosità e splendore.\r\n\r\n\r\nQuesta collana artigianale rappresenta l\'armonia tra la bellezza dei fiori di Myosotis e l\'eleganza senza tempo dell\'argento. Indossando questo gioiello, porterai con te un pezzo di natura e aggiungerai un tocco di raffinatezza a qualsiasi outfit, sia esso formale o informale. È inoltre un regalo perfetto per le persone a cui tieni, per celebrare momenti speciali o semplicemente per esprimere il tuo affetto.\r\n\r\nDimensioni:\r\nAcciaio 304 inox nickel free\r\nCiondolo 20 mm\r\nCollana 45 cm\r\n\r\nCaratteristiche:\r\n\r\nFiori di Myosotis veri e naturali\r\nFiori di Pizzo della Regina Anna veri e naturali\r\nCatena elegante e resistente\r\nDesign unico e raffinato', 'Collana myosotis pizzo della regina Anna', 23.65, 10, 2),
(16, 'Piccoli anelli in acciaio inossidabile e anallergico, placcato oro.\r\nElegantissimi nella loro semplicità, sono lavorati con fiori veri e foglie oro o con piccoli vetrini colorati.\r\n\r\nLavorati a mano con pazienza e amore.', 'Anellini MINIATURE ~botanic~', 20, 10, 2),
(17, 'Anelli fatti a mano con diverse pietre e cristalli, scorrete le foto per vedere i nomi delle pietre, il filo che volete utilizzare per il vostro anello e la taglia da inserire nella personalizzazione se lo volete su misura (sono disponibili anche regolabili)\r\nAlcune pietre sono a quantità limitate! \r\nTutte le pietre sono vere, i fili sono in alluminio (non diventano verdi e non si rovinano sotto l\'acqua) e rame.\r\nPer qualsiasi domanda o informazione scrivetemi pure, o qui o su instagram (@cactysjewels)', '\r\nAnelli con pietre ', 6, 10, 2),
(18, 'Collana artigianale in resina con fiori veri pressati di Alyssum viola e ciondolo dorato in acciaio inossidbile da 25 mm.\r\n\r\nOgni pezzo è realizzato a mano con cura e passione, creando gioielli unici e distintivi. I fiori veri, accuratamente selezionati e pressati, vengono abilmente incastonati nella resina trasparente, creando un effetto visivo mozzafiato e catturando l\'essenza naturale dei fiori per sempre.\r\n\r\nLa forma tondeggiante del ciondolo aggiunge un tocco di eleganza e versatilità, perfetta per qualsiasi occasione. Il design unico di queste collane artigianali garantisce che ogni pezzo sia davvero uno speciale capolavoro da indossare o da regalare a una persona cara.\r\n\r\nOltre alla loro bellezza estetica, le nostre collane offrono anche un legame intimo con la natura. Sono il modo perfetto per portare con sé un pezzo di giardino fiorito ovunque si vada.\r\n\r\nCrediamo nell\'uso di materiali di alta qualità e nell\'attenzione ai dettagli. Ogni collana è realizzata con cura e attenzione, utilizzando solo materiali pregiati. La resina trasparente garantisce una protezione duratura dei fiori pressati, consentendovi di godere a lungo della bellezza naturale di questi gioielli.\r\n\r\nSia che desideriate regalarla o indossarla, questa collana sarà sicuramente un punto focale che attirerà l\'attenzione e susciterà ammirazione.\r\n\r\nDimensioni:\r\nCollana regolabile 45/50 cm\r\nCiondolo 2,5 cm\r\nAcciaio inossidabile nichel free\r\nResina atossica\r\n', 'Collana in resina con fiori veri', 10, 10, 2),
(19, 'Scopri un vassoio per gioielli artistico in resina unico, fatto a mano, meticolosamente realizzato per essere unico nel suo genere. Perfetto per mostrare i tuoi gioielli con un tocco artistico ed eleganza.\r\n\r\nPulizia: utilizzare un panno morbido e privo di lanugine per pulire delicatamente la superficie in resina per rimuovere polvere o impronte digitali. Evitare l\'uso di detergenti abrasivi o materiali ruvidi che potrebbero graffiare la resina.\r\n\r\nIn caso di dubbi o domande relative al tuo acquisto, non esitare a contattarci: siamo qui per assisterti tempestivamente.\r\n\r\nApprezziamo profondamente il vostro sostegno alla nostra piccola impresa!', 'Vassoio per gioielli fatto a mano', 12.74, 10, 2),
(20, 'Orecchini in Ottone - interamente realizzati a mano.\r\nChiusura a lobo anallergica. \r\nSemplici, leggeri ed eleganti.\r\n\r\nAll\'interno della confezione verranno inseriti i consigli su come prendersi cura del proprio gioiello.\r\n\r\n\r\n\r\nFOLLOW ME ON INSTAGRAM\r\n@circle_artisanjewels', 'Orecchini in ottone \"leaves\"', 28, 10, 2),
(21, 'materiale: ottone\r\ndimensione: mini 1.2 x 0.9 cm\r\nmedi 1.5 x 1.1 cm\r\nmaxi 2 x 1.5 cm\r\n\r\nquesti orecchini a forma di foglia di ginkgo biloba sono stati tutti tagliati, lavorati e saldati a mano partendo dalla materia grezza \r\n\r\nPer evitare possibili allergie non tratto chimicamente i metalli quindi l\'ottone, a contatto con l\'aria, tende nel tempo a perdere brillantezza ed a scurirsi. Si possono pulire con prodotti appositi come il \"Sidol\" oppure con il succo di limone. Se preferisci un prodotto che non necessita di manutenzione puoi scegliere la variante in alluminio, dunque di colore grigio, perchè rimane inalterata nel tempo.', 'Orecchini in ottone a foglia di ginkgo biloba', 23.89, 10, 2),
(22, 'Cavigliera artigianale semirigida in alluminio modellato e martellato a mano.\r\nOgni pezzo è unico.\r\n\r\nGUIDA ALLA TAGLIA: \r\n(le misure si riferiscono alla caviglia, non alla cavigliera) \r\n\r\nXS 19-20 cm \r\nS 21-22 cm \r\nM 23-24 cm \r\nL 25-26 cm \r\nXL 27-28 cm \r\nXXL 29-30 cm', 'Cavigliera semplice', 7, 10, 2),
(23, 'Eleganza floreale e maiolica artigianale: 4 collane uniche per te!\r\n\r\nScopri il fascino di due diversi stili con queste collane fatte a mano con ciondoli in argilla polimerica.\r\n\r\n1. Collane con ciondolo floreale:\r\nDipinti a mano con cura: Ogni fiore è un\'opera d\'arte unica, realizzata con meticolosa attenzione ai dettagli.\r\nBase cammeo in legno: Dona un tocco di rusticità e raffinatezza al gioiello.\r\nCatena in acciaio inossidabile: Resistente e lucente, si abbina perfettamente al ciondolo.\r\nChiusura a moschettone: Pratica e sicura, per indossare e togliere la collana con facilità.', 'Collana in Argilla Polimerica: Floreale ', 18, 10, 2);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
