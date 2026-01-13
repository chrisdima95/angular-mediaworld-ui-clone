import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CarouselComponent } from "../../carousel/carousel.component";
import { Card, CardsComponent } from '../../cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {
  cardsData: Card[] = [
  {
    id: 'card-tv',
    link: ['/tv'],  
    imgSrc: '/card-tv.jpg',
    imgAlt: 'TV',
    title: 'TV SAMSUNG',
    description: 'Le TV Samsung sono tra le più innovative sul mercato: offrono immagini di altissima qualità grazie a tecnologie come LED, QLED, OLED e New QLED, con risoluzioni fino a 8K e supporto HDR10+.',
    buttonText: 'Scopri prodotti',
    imgWidth: 360,
    imgHeight: 240
  },
  {
    id: 'card-elettrodomestici',
    link: ['/elettrodomestici'],
    imgSrc: '/card-elettrodomestici.jpg',
    imgAlt: 'Elettrodomestici',
    title: 'ELETTRODOMESTICI',
    description: 'Gli elettrodomestici sono apparecchi alimentati a energia elettrica destinati all\'uso domestico, suddivisi in grandi elettrodomestici, piccoli elettrodomestici e dispositivi per lo svago e la comunicazione',
    buttonText: 'Scopri prodotti',
    imgWidth: 360,
    imgHeight: 240
  },
  {
    id: 'card-telefoni',
    link: ['/telefoni'],
    imgSrc: '/card-iphone.jpg',
    imgAlt: 'Iphone',
    title: 'IPHONE',
    description: 'L\'iPhone è una linea di smartphone prodotta da Apple che integra telefono, fotocamera digitale, lettore musicale e funzioni da computer in un unico dispositivo con interfaccia touchscreen. Utilizza il sistema operativo iOS e si distingue per design elegante, facilità d\'uso e ampia disponibilità di app',
    buttonText: 'Scopri prodotti',
    imgWidth: 240,
    imgHeight: 240
  }
];

}
