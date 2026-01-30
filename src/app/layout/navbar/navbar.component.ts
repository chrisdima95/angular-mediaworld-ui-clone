import { Component, DestroyRef, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { CartService } from '../../services/cart.service';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavbarComponent {
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  menuActive = false;
  searchQuery: string = '';
  cartCount: number = 0;
  isCheckoutPage: boolean = false;

  constructor(
    public loginService: LoginService,
    public cartService: CartService,
    private router: Router,
  ) {
    // Sottoscrivi agli aggiornamenti del carrello con gestione automatica unsubscribe
    // Usa startWith per catturare il valore iniziale
    this.cartService.cartItems$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.cartCount = this.cartService.getCartCount();
        this.cdr.markForCheck();
      });

    // Aggiorna anche dopo un breve delay per assicurarsi che il carrello sia stato caricato
    setTimeout(() => {
      this.cartCount = this.cartService.getCartCount();
      this.cdr.markForCheck();
    }, 0);

    // Controlla se siamo nella pagina checkout con gestione automatica unsubscribe
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      this.isCheckoutPage = this.router.url === '/checkout';
      this.cdr.markForCheck();
    });

    // Controllo iniziale
    this.isCheckoutPage = this.router.url === '/checkout';
  }

  onCartClick(event: Event) {
    event.preventDefault();
    // Permetti sempre l'accesso al carrello, anche se non loggato
    this.router.navigate(['/carrello']);
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    this.cdr.markForCheck();
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Ricerca:', this.searchQuery);
      // Qui puoi aggiungere la logica di ricerca
    }
  }
}
