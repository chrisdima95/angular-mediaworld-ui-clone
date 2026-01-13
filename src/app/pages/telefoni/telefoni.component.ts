import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardsComponent, Card } from '../../cards/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-telefoni',
  imports: [CardsComponent, CommonModule],
  templateUrl: './telefoni.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelefoniComponent {
  cardsData: Card[] = [
    {
      id: 'telefoni-iphone-16',
      link: ['/telefoni/iPhone 16'],
      imgSrc: '/1iphone.jpg',
      imgAlt: 'iPhone',
      title: 'iPhone 16',
      description: 'L\'iPhone 16 è uno smartphone Apple con display Super Retina XDR OLED da 6,1" e risoluzione 2556x1179 pixel a 460 ppi, caratterizzato da Dynamic Island, HDR, True Tone e ampia gamma cromatica P3. Ha un design in alluminio con parte frontale in Ceramic Shield di nuova generazione e vetro posteriore a infusione.',
      originalPrice: '1.199,00 €',
      price: '959,20 €',
      discountPercentage: 20
    },
    {
      id: 'telefoni-samsung-s25-ultra',
      link: ['/telefoni/SAMSUNG Galaxy S25 Ultra'],
      imgSrc: '/1samsung.jpg',
      imgAlt: 'Samsung Galaxy',
      title: 'SAMSUNG Galaxy S25 Ultra',
      description: 'Il Samsung Galaxy S25 Ultra è uno smartphone top di gamma con display Dynamic LTPO AMOLED 2X da 6,9" (1440x3120 pixel, 120 Hz, HDR10+, picco 2600 nits) protetto da Corning Gorilla Glass Victus 2. Monta il potente chipset Qualcomm Snapdragon 8 Elite (3 nm) con 12 GB di RAM e storage da 256 GB, 512 GB o 1 TB non espandibile.',
      price: '1.349,00 €'
    },
    {
      id: 'telefoni-google-pixel-9-pro',
      link: ['/telefoni/GOOGLE Pixel 9 Pro XL'],
      imgSrc: '/1google.jpg',
      imgAlt: 'Google Pixel',
      title: 'GOOGLE Pixel 9 Pro XL',
      description: 'Il Google Pixel 9 Pro XL è uno smartphone di fascia alta con display OLED LTPO da 6,8" (2992x1344 pixel, 120 Hz, HDR10+, picco luminosità 3000 nit) protetto da Gorilla Glass Victus 2. Monta il chipset Google Tensor G4 a 4 nm con 16 GB di RAM e storage fino a 1 TB.',
      originalPrice: '999,00 €',
      price: '799,20 €',
      discountPercentage: 20
    },
    {
      id: 'telefoni-motorola-edge-60',
      link: ['/telefoni/MOTOROLA EDGE 60 FUSION 8+'],
      imgSrc: '/1motorola.jpg',
      imgAlt: 'Motorola',
      title: 'MOTOROLA EDGE 60 FUSION 8+',
      description: 'Smartphone Motorola con ottime prestazioni, ricarica veloce e design moderno.',
      price: '449,00 €'
    }
  ];
}
