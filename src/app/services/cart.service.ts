import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  title: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private platformId = inject(PLATFORM_ID);
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();
  private priceCache = new Map<string, number>(); // Cache per prezzi parsati

  constructor() {
    // Il carrello non viene salvato nel localStorage
    // Si svuota automaticamente quando l'app viene chiusa e riaperta
    // Assicurati che il carrello sia vuoto all'avvio
    this.cartItems.next([]);
  }

  addToCart(product: Omit<CartItem, 'quantity' | 'id'>) {
    const currentItems = this.cartItems.value;
    const productId = `${product.title}-${Date.now()}`;
    
    const existingItem = currentItems.find(item => item.title === product.title);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({
        ...product,
        id: productId,
        quantity: 1
      });
    }
    
    this.cartItems.next([...currentItems]);
  }

  removeFromCart(itemId: string) {
    const currentItems = this.cartItems.value.filter(item => item.id !== itemId);
    this.cartItems.next(currentItems);
  }

  updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }
    
    const currentItems = this.cartItems.value.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    this.cartItems.next(currentItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItems.value;
  }

  getCartCount(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => {
      // Usa cache se disponibile, altrimenti parse e cache
      let price = this.priceCache.get(item.price);
      if (price === undefined) {
        price = parseFloat(item.price.replace('€', '').replace('.', '').replace(',', '.').trim());
        this.priceCache.set(item.price, price);
      }
      return total + (price * item.quantity);
    }, 0);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  checkout() {
    // Simula un acquisto fittizio
    const items = this.cartItems.value;
    if (items.length === 0) {
      return false;
    }
    
    // Salva l'ordine (fittizio)
    const order = {
      id: `ORD-${Date.now()}`,
      items: items,
      total: this.getTotalPrice(),
      date: new Date().toISOString()
    };
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('myAppLastOrder', JSON.stringify(order));
    }
    this.clearCart();
    return true;
  }
}
