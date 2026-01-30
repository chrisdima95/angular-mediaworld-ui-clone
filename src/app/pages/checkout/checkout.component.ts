import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {
  isLoggedIn: boolean = false;
  showPassword: boolean = false;
  showRegisterPassword: boolean = false;
  showRegisterConfirmPassword: boolean = false;
  showRegisterForm: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(
    private loginService: LoginService,
    private cartService: CartService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.loginService.isUserLogged();
    
    // Se già loggato, vai direttamente all'ordine
    if (this.isLoggedIn) {
      this.completeOrder();
    }
  }

  ngOnDestroy() {
    // Cleanup se necessario
  }

  get loginEmail() {
    return this.loginForm.get('email');
  }

  get loginPassword() {
    return this.loginForm.get('password');
  }

  get registerEmail() {
    return this.registerForm.get('email');
  }

  get registerPassword() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email && password) {
        if (this.loginService.login(email, password)) {
          this.isLoggedIn = true;
          this.cdr.markForCheck();
          this.completeOrder();
        } else {
          alert('Email e password obbligatorie');
        }
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  register() {
    // Se il form non è ancora visibile, mostralo
    if (!this.showRegisterForm) {
      this.showRegisterForm = true;
      this.cdr.markForCheck();
      return;
    }

    // Se il form è visibile, procedi con la registrazione
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const confirmPassword = this.registerForm.value.confirmPassword;

      if (password !== confirmPassword) {
        alert('Le password non corrispondono');
        return;
      }

      if (email && password) {
        if (this.loginService.register(email, password)) {
          this.isLoggedIn = true;
          this.cdr.markForCheck();
          this.completeOrder();
        } else {
          alert('Errore durante la registrazione');
        }
      }
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  continueAsGuest() {
    // Procedi come ospite (senza login)
    this.completeOrder();
  }

  completeOrder() {
    const success = this.cartService.checkout();
    if (success) {
      alert('Ordine effettuato con successo!');
      this.router.navigate(['/home']);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.cdr.markForCheck();
  }

  toggleRegisterPasswordVisibility() {
    this.showRegisterPassword = !this.showRegisterPassword;
    this.cdr.markForCheck();
  }

  toggleRegisterConfirmPasswordVisibility() {
    this.showRegisterConfirmPassword = !this.showRegisterConfirmPassword;
    this.cdr.markForCheck();
  }

  getLoginEmailErrorMessage(): string {
    if (this.loginEmail?.hasError('required')) {
      return 'L\'email è obbligatoria';
    }
    if (this.loginEmail?.hasError('email')) {
      return 'Inserisci un\'email valida';
    }
    return '';
  }

  getRegisterEmailErrorMessage(): string {
    if (this.registerEmail?.hasError('required')) {
      return 'L\'email è obbligatoria';
    }
    if (this.registerEmail?.hasError('email')) {
      return 'Inserisci un\'email valida';
    }
    return '';
  }

  getRegisterPasswordErrorMessage(): string {
    if (this.registerPassword?.hasError('required')) {
      return 'La password è obbligatoria';
    }
    if (this.registerPassword?.hasError('minlength')) {
      return 'La password deve essere di almeno 6 caratteri';
    }
    return '';
  }
}
