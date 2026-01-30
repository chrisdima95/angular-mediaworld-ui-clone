import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardsComponent, Card } from '../../cards/cards.component';


@Component({
  selector: 'app-elettrodomestici',
  imports: [CardsComponent],
  templateUrl: './elettrodomestici.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElettrodomesticiComponent {
  cardsData: Card[] = [
    {
      id: 'elettrodomestici-lg-frigorifero',
      link: ['/elettrodomestici'],
      imgSrc: '/1frigorifero.jpg',
      imgAlt: 'frigorifero',
      title: 'LG GBV3100DPY FRIGORIFERO COMBINATO',
      description: 'Il frigorifero combinato LG GBV3100DPY ha una capacità totale di 344 litri (234 l frigorifero + 110 l congelatore), con sistema di raffreddamento Total No Frost che evita la formazione di ghiaccio e condensa. È dotato di tecnologie come Linear Cooling per mantenere costante la temperatura, Door Cooling per un raffreddamento uniforme anche nella porta, e Fresh Converter che permette di regolare il cassetto Zero Gradi per conservare carne, pesce o altri alimenti a temperature ottimali o convertirlo in cassetto frigorifero.',
      originalPrice: '699,99 €',
      price: '559,99 €',
      discountPercentage: 20
    },
    {
      id: 'elettrodomestici-electrolux-lavatrice',
      link: ['/elettrodomestici'],
      imgSrc: '/1lavatrice.jpg',
      imgAlt: 'Lavatrice',
      title: 'ELECTROLUX EW6S306BL LAVATRICE SLIM',
      description: 'La lavatrice Electrolux EW6S306BL è un modello slim a caricamento frontale con capacità di 6 kg, ideale per spazi ridotti grazie alla profondità di soli 37,8 cm. Dotata di tecnologia SensiCare System, regola automaticamente il ciclo in base al carico per risparmiare tempo, acqua ed energia, garantendo un lavaggio delicato e sostenibile.',
      price: '499,00 €'
    },
    {
      id: 'elettrodomestici-beko-lavastoviglie',
      link: ['/elettrodomestici'],
      imgSrc: '/1lavastoviglie.jpg',
      imgAlt: 'Lavastoviglia',
      title: 'BEKO DVN05320X LAVASTOVIGLIE',
      description: 'La lavastoviglie Beko DVN05320X è un modello a libera installazione da 60 cm con 13 coperti e classe energetica E. Ha 5 programmi di lavaggio, tra cui Eco 50°C, Intensivo 70°C e Rapido. Il sistema di asciugatura è statico e il livello di rumorosità è di 49 dB. Dispone di partenza ritardata (3-6-9 ore), mezzo carico e sistema di sicurezza Aquastop.',
      originalPrice: '379,90 €',
      price: '303,92 €',
      discountPercentage: 20
    },
    {
      id: 'elettrodomestici-electrolux-forno',
      link: ['/elettrodomestici'],
      imgSrc: '/1forno.jpg',
      imgAlt: 'Forno',
      title: 'ELECTROLUX COFFP46TX0 FORNO INCASSO',
      description: 'Il forno da incasso Electrolux COFFP46TX0 è un modello multifunzione da 72 litri con tecnologia di pulizia pirolitica che trasforma i residui in cenere per una facile rimozione. Offre cottura uniforme su più livelli grazie alla resistenza circolare aggiuntiva e alla ventola interna, ideale per cucinare contemporaneamente su tre teglie.',
      price: '549,00 €'
    }
  ];
}
