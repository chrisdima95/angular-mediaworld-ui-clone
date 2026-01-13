import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Slide {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  slides: Slide[] = [
    { imgSrc: '1carousel.jpg', imgAlt: 'Immagine mediaworld 1' },
    { imgSrc: '2carousel.jpg', imgAlt: 'Immagine mediaworld 2' },
    { imgSrc: '3carousel.jpg', imgAlt: 'Immagine mediaworld 3' },
    { imgSrc: '4carousel.jpg', imgAlt: 'Immagine mediaworld 4' },
  ];
}
