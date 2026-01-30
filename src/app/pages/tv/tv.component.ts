import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardsComponent, Card } from '../../cards/cards.component';


@Component({
  selector: 'app-tv',
  imports: [CardsComponent],
  templateUrl: './tv.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvComponent {
  cardsData: Card[] = [
    {
      id: 'tv-samsung-ue43cu7090',
      link: ['/tv/samsung'],
      imgSrc: '/1tv.jpg',
      imgAlt: 'TV Samsung',
      title: 'SAMSUNG UE43CU7090UXZT TV LED, 43 ", UHD 4K',
      description: 'La Samsung UE43CU7090UXZT è una Smart TV LED da 43 pollici con risoluzione UHD 4K, dotata di tecnologia Crystal Processor 4K per immagini nitide e colori realistici grazie a PurColor e supporto HDR10+, HDR e Filmmaker Mode.',
      originalPrice: '379,99 €',
      price: '303,99 €',
      discountPercentage: 20
    },
    {
      id: 'tv-samsung-ue43du7170',
      link: ['/tv/samsung'],
      imgSrc: '/2tv.jpg',
      imgAlt: 'TV Samsung',
      title: 'SAMSUNG UE43DU7170UXZT TV LED, 43 ", UHD 4K',
      description: 'La Samsung UE43DU7170UXZT è una Smart TV LED da 43" con risoluzione UHD 4K (3840x2160), dotata di processore Crystal 4K che assicura un upscaling avanzato e colori vividi.',
      price: '429,50 €'
    },
    {
      id: 'tv-samsung-qe55qn85',
      link: ['/tv/samsung'],
      imgSrc: '/3tv.jpg',
      imgAlt: 'TV Samsung',
      title: 'SAMSUNG QE55QN85DBTXZT Mini LED TV NEO QLED, 55"',
      description: 'La Samsung QE55QN85DBTXZT è una Smart TV Neo QLED Mini LED da 55" con risoluzione UHD 4K (3840x2160), dotata del processore NQ4 AI Gen2 che migliora la qualità dell\'immagine con upscaling AI e supporta HDR10+ Adaptive e Neo Quantum HDR per colori intensi e contrasti profondi.',
      price: '1.299,00 €'
    },
    {
      id: 'tv-samsung-qe50q60',
      link: ['/tv/samsung'],
      imgSrc: '/4tv.jpg',
      imgAlt: 'TV Samsung',
      title: 'SAMSUNG QE50Q60DAU TV QLED, Piatto, 50 ", UHD 4K',
      description: 'La Samsung QE50Q60DAU è una Smart TV QLED da 50" con risoluzione UHD 4K (3840x2160), dotata di tecnologia Dual LED per un contrasto migliorato e Quantum HDR per colori vividi e dettagli nitidi.',
      originalPrice: '749,00 €',
      price: '599,20 €',
      discountPercentage: 20
    }
  ];
}
