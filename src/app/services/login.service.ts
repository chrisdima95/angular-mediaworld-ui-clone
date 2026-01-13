import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

export interface UserInfo {
  nome: string;
  cognome: string;
  email: string;
  username: string;
  role: string;
  indirizzo?: string;
  dataNascita?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private platformId = inject(PLATFORM_ID);

  constructor(
    public router: Router,
    private cartService: CartService,
  ) { }

  login(email: string, password: string){
    console.log('Sono nel servizio');
    console.log(email);
    console.log(password);

    // Accetta qualsiasi email valida e password non vuota
    if(email && password && email.trim() !== '' && password.trim() !== ''){
      // Estrae il nome utente dall'email (parte prima della @)
      const username = email.split('@')[0];
      
      // Carica dati esistenti se l'utente è già loggato
      let existingUser: UserInfo | null = null;
      if (isPlatformBrowser(this.platformId)) {
        const savedUser = localStorage.getItem('myAppLoggedUser');
        if (savedUser) {
          try {
            existingUser = JSON.parse(savedUser);
          } catch (e) {
            console.error('Errore nel caricamento dati utente:', e);
          }
        }
      }
      
      const userLogged: UserInfo = {
        nome: existingUser?.nome || username.charAt(0).toUpperCase() + username.slice(1),
        cognome: existingUser?.cognome || 'Utente',
        email: email,
        username: username,
        role: 'user',
        indirizzo: existingUser?.indirizzo || '',
        dataNascita: existingUser?.dataNascita || '',
      }
      console.log('Login effettuato con successo')

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('myAppLoggedUser', JSON.stringify(userLogged));
      }

      return true
    } else {
      console.log('Email e password obbligatorie')
      return false
    }
  }

  updateUserInfo(userInfo: UserInfo): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('myAppLoggedUser', JSON.stringify(userInfo));
    }
  }

  getUserInfo(): UserInfo | null {
    if (isPlatformBrowser(this.platformId)) {
      const savedUser = localStorage.getItem('myAppLoggedUser');
      if (savedUser) {
        try {
          return JSON.parse(savedUser);
        } catch (e) {
          console.error('Errore nel caricamento dati utente:', e);
          return null;
        }
      }
    }
    return null;
  }

  logout(){
    // Svuota il carrello quando l'utente fa logout
    this.cartService.clearCart();
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('myAppLoggedUser');
    }
    this.router.navigate(['/home']);
  }

  register(email: string, password: string): boolean {
    console.log('Registrazione nel servizio');
    console.log(email);
    console.log(password);

    // Accetta qualsiasi email valida e password non vuota
    if(email && password && email.trim() !== '' && password.trim() !== ''){
      // Estrae il nome utente dall'email (parte prima della @)
      const username = email.split('@')[0];
      
      const newUser: UserInfo = {
        nome: username.charAt(0).toUpperCase() + username.slice(1),
        cognome: 'Utente',
        email: email,
        username: username,
        role: 'user',
        indirizzo: '',
        dataNascita: '',
      }
      console.log('Registrazione effettuata con successo')

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('myAppLoggedUser', JSON.stringify(newUser));
      }

      return true
    } else {
      console.log('Email e password obbligatorie')
      return false
    }
  }

  isUserLogged() { 
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('myAppLoggedUser');
    }
    return false; 
  }
}

