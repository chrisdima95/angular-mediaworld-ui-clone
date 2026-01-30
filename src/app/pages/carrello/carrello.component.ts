import { Component, OnInit, DestroyRef, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { RouterLink, Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrelloComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  isLoggedIn: boolean = false;

  constructor(
    public cartService: CartService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    // Controlla se l'utente è loggato
    this.isLoggedIn = this.loginService.isUserLogged();

    // Sottoscrivi agli aggiornamenti del carrello con gestione automatica unsubscribe
    this.cartService.cartItems$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => {
        this.cartItems = items;
        this.totalPrice = this.cartService.getTotalPrice();
        this.cdr.markForCheck();
      });
  }

  removeItem(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }

  updateQuantity(itemId: string, quantity: number) {
    this.cartService.updateQuantity(itemId, quantity);
  }

  proceedToCheckout() {
    if (this.cartItems.length === 0) {
      alert('Il carrello è vuoto!');
      return;
    }

    // Vai alla pagina checkout (login/registrazione)
    this.router.navigate(['/checkout']);
  }

  formatPrice(price: string): number {
    return parseFloat(price.replace('€', '').replace('.', '').replace(',', '.').trim());
  }
}
