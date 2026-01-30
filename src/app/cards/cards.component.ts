import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ButtonComponent } from '../shared/button/button.component'; 

import { CartService } from '../services/cart.service';

export interface Card {
  id?: string; // ID univoco per tracking ottimizzato
  link: string[];
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  price?: string;
  originalPrice?: string; // Prezzo originale (se c'è uno sconto)
  discountPercentage?: number; // Percentuale di sconto
  imgWidth?: number; // Larghezza immagine
  imgHeight?: number; // Altezza immagine
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardsComponent {
  @Input() cards: Card[] = [];
  showModal: boolean = false;
  lastAddedProduct: Card | null = null;

  constructor(
    private cartService: CartService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  addToCart(card: Card) {
    // Usa il prezzo scontato se disponibile, altrimenti il prezzo normale
    const priceToUse = card.price || card.originalPrice;
    if (priceToUse) {
      this.cartService.addToCart({
        title: card.title,
        price: priceToUse,
        imgSrc: card.imgSrc,
        imgAlt: card.imgAlt
      });
      this.lastAddedProduct = card;
      this.showModal = true;
      this.cdr.markForCheck();
    }
  }

  closeModal() {
    this.showModal = false;
    this.cdr.markForCheck();
  }

  goToCart() {
    this.closeModal();
    this.router.navigate(['/carrello']);
  }

  continueShopping() {
    this.closeModal();
  }
}
