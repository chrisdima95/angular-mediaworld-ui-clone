import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { NotauthGuard } from './guards/notauth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'tv', 
        loadComponent: () => import('./pages/tv/tv.component').then(m => m.TvComponent)
    },
    {
        path: 'elettrodomestici', 
        loadComponent: () => import('./pages/elettrodomestici/elettrodomestici.component').then(m => m.ElettrodomesticiComponent)
    },
    {
        path: 'telefoni', 
        loadComponent: () => import('./pages/telefoni/telefoni.component').then(m => m.TelefoniComponent)
    },
    {
        path: 'contatti', 
        loadComponent: () => import('./pages/contatti/contatti.component').then(m => m.ContattiComponent)
    },
    {
        path: 'login', 
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'carrello', 
        loadComponent: () => import('./pages/carrello/carrello.component').then(m => m.CarrelloComponent)
    },
    {
        path: 'checkout', 
        loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent)
    },
    {
        path: '**', 
        loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent)
    },
];
