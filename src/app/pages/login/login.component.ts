import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService, UserInfo } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  userInfo: UserInfo | null = null;

  constructor(
    public router: Router,
    public loginService: LoginService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.loginService.isUserLogged();
    if (this.isLoggedIn) {
      this.userInfo = this.loginService.getUserInfo();
      this.loadUserData();
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  })

  userInfoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    indirizzo: new FormControl(''),
    dataNascita: new FormControl(''),
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get userEmail() {
    return this.userInfoForm.get('email');
  }

  get nome() {
    return this.userInfoForm.get('nome');
  }

  get cognome() {
    return this.userInfoForm.get('cognome');
  }

  loadUserData() {
    if (this.userInfo) {
      this.userInfoForm.patchValue({
        nome: this.userInfo.nome,
        cognome: this.userInfo.cognome,
        email: this.userInfo.email,
        indirizzo: this.userInfo.indirizzo || '',
        dataNascita: this.userInfo.dataNascita || '',
      });
    }
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email && password) {
        if (this.loginService.login(email, password)) {
          console.log('sono loggato');
          this.isLoggedIn = true;
          this.userInfo = this.loginService.getUserInfo();
          this.loadUserData();
          this.cdr.markForCheck();
        } else {
          alert('Email e password obbligatorie');
        }
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  updateUserInfo() {
    if (this.userInfoForm.valid && this.userInfo) {
      const updatedInfo: UserInfo = {
        ...this.userInfo,
        nome: this.userInfoForm.value.nome || this.userInfo.nome,
        cognome: this.userInfoForm.value.cognome || this.userInfo.cognome,
        email: this.userInfoForm.value.email || this.userInfo.email,
        indirizzo: this.userInfoForm.value.indirizzo || '',
        dataNascita: this.userInfoForm.value.dataNascita || '',
      };
      
      this.loginService.updateUserInfo(updatedInfo);
      this.userInfo = updatedInfo;
      this.cdr.markForCheck();
      alert('Dati aggiornati con successo!');
    } else {
      this.userInfoForm.markAllAsTouched();
    }
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.userInfo = null;
    this.loginForm.reset();
    this.userInfoForm.reset();
    this.cdr.markForCheck();
  }

  getEmailErrorMessage(): string {
    if (this.email?.hasError('required')) {
      return 'L\'email è obbligatoria';
    }
    if (this.email?.hasError('email')) {
      return 'Inserisci un\'email valida (es: nome@dominio.com)';
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    if (this.password?.hasError('required')) {
      return 'La password è obbligatoria';
    }
    return '';
  }

  getUserEmailErrorMessage(): string {
    if (this.userEmail?.hasError('required')) {
      return 'L\'email è obbligatoria';
    }
    if (this.userEmail?.hasError('email')) {
      return 'Inserisci un\'email valida (es: nome@dominio.com)';
    }
    return '';
  }
}