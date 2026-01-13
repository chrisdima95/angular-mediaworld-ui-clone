import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {
  constructor(
    private authService: LoginService,
    private router: Router) {}

    canActivate(): boolean {
      if (!this.authService.isUserLogged()){
        return true;
      } else {
        this.router.navigate(['home']);
        return false;
      }
    }
  
}

