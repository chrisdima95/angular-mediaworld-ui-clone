# Mediaword 🛍️

**Progetto ITS - Clone grafico di Mediaworld.it (Aprile 2025)**

Questo progetto è una ricostruzione grafica del sito **Mediaworld.it**, sviluppata come progetto per l'esame di Angular del corso ITS (Istituto Tecnico Superiore). L'applicazione replica l'interfaccia e l'esperienza utente del famoso e-commerce italiano, utilizzando le tecnologie Angular moderne.

## 📋 Descrizione

Mediaword è un'applicazione e-commerce sviluppata in **Angular 19**, che emula l'aspetto grafico e la struttura del sito Mediaworld.it. Il progetto dimostra competenze in:

- Sviluppo front-end con framework moderni
- Progettazione UI/UX responsive
- Gestione dello stato dell'applicazione
- Routing e lazy loading
- Server-Side Rendering (SSR)
- Progressive Web App (PWA)

## 🚀 Tecnologie Utilizzate

- **Angular 19.2.18** - Framework principale
- **TypeScript 5.7.2** - Linguaggio di programmazione
- **RxJS 7.8.0** - Programmazione reattiva
- **Angular SSR** - Server-Side Rendering
- **Angular Service Worker** - Supporto PWA
- **Express 4.18.2** - Server Node.js per SSR
- **HTML5, CSS3** - Markup e styling

## ✨ Funzionalità

### 🏠 Pagine Principali
- **Home**: Pagina principale con carousel dei prodotti in evidenza
- **TV**: Catalogo televisori
- **Elettrodomestici**: Catalogo elettrodomestici (frigoriferi, lavatrici, forni, lavastoviglie)
- **Telefoni**: Catalogo smartphone
- **Sconti**: Pagina dedicata alle offerte speciali
- **Contatti**: Pagina con form di contatto
- **Login/Registrazione**: Sistema di autenticazione utente
- **Carrello**: Gestione prodotti nel carrello
- **Checkout**: Procedura di checkout (prototipo)

### 🔧 Caratteristiche Tecniche

- **Componenti Standalone**: Architettura moderna con componenti standalone
- **Lazy Loading**: Caricamento lazy delle route per ottimizzare le performance
- **Routing Protetto**: Guard per proteggere le route riservate agli utenti autenticati
- **Gestione Stato**: Servizi per la gestione del carrello e dell'autenticazione
- **Change Detection Ottimizzata**: Utilizzo di `OnPush` strategy per migliori performance
- **SSR**: Server-Side Rendering configurato per migliorare SEO e tempi di caricamento
- **PWA**: Service Worker configurato per funzionalità Progressive Web App
- **Preloading Strategico**: Strategia personalizzata per il preload delle route critiche
- **Responsive Design**: Interfaccia ottimizzata per dispositivi desktop, tablet e mobile

## 📦 Installazione

### Prerequisiti

Assicurati di avere installato:
- **Node.js** (versione 18 o superiore)
- **npm** (incluso con Node.js) oppure **yarn**

### Passi per l'installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/tuonome/mediaword.git
   cd mediaword
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   ng serve
   ```
   
   Oppure:
   ```bash
   npm start
   ```

4. **Apri il browser**
   
   Naviga su `http://localhost:4200/`

L'applicazione si ricaricherà automaticamente quando modifichi i file sorgente.

## 🛠️ Script Disponibili

- `ng serve` o `npm start` - Avvia il server di sviluppo
- `ng build` - Compila il progetto per la produzione
- `ng test` - Esegue i test unitari con Karma
- `ng serve --configuration production` - Avvia in modalità produzione

## 📁 Struttura del Progetto

```
mediaword/
├── src/
│   ├── app/
│   │   ├── layout/          # Componenti di layout (navbar, footer)
│   │   ├── pages/           # Componenti delle pagine
│   │   │   ├── home/
│   │   │   ├── tv/
│   │   │   ├── elettrodomestici/
│   │   │   ├── telefoni/
│   │   │   ├── carrello/
│   │   │   ├── checkout/
│   │   │   ├── login/
│   │   │   ├── contatti/
│   │   │   └── sconti/
│   │   ├── services/        # Servizi (cart, login)
│   │   ├── guards/          # Route guards
│   │   ├── shared/          # Componenti condivisi
│   │   ├── directives/      # Direttive personalizzate
│   │   └── strategies/      # Strategie di routing
│   ├── styles.css           # Stili globali
│   └── index.html
├── public/                  # Asset statici (immagini, manifest)
├── angular.json             # Configurazione Angular
├── package.json             # Dipendenze del progetto
└── README.md
```

## 🎨 Design e UI

Il progetto replica fedelmente l'interfaccia grafica di Mediaworld.it, mantenendo:

- **Schema colori**: Colori caratteristici del brand (rosso #d40000, nero, bianco)
- **Tipografia**: Font Montserrat e Inter
- **Layout**: Struttura e disposizione degli elementi simile al sito originale
- **Componenti**: Cards prodotti, carousel, navbar, footer
- **Responsive**: Design adattivo per tutti i dispositivi

## ⚙️ Configurazione

### Variabili d'Ambiente

Al momento non sono necessarie variabili d'ambiente per il funzionamento dell'applicazione.

### Build di Produzione

Per creare una build ottimizzata per la produzione:

```bash
ng build --configuration production
```

I file compilati saranno disponibili nella cartella `dist/mediaword/`.

## 🔒 Autenticazione

Il sistema di autenticazione è implementato come prototipo:

- **Login**: Accetta qualsiasi email valida e password non vuota
- **Registrazione**: Crea un nuovo utente con email e password
- **Storage**: I dati utente vengono salvati nel localStorage
- **Guards**: Route protette con `AuthGuard` e `NotAuthGuard`

## 🛒 Carrello

Il carrello implementa:

- Aggiunta/rimozione prodotti
- Modifica quantità
- Calcolo totale automatico
- Persistenza durante la sessione (non salvato in localStorage)
- Integrazione con il sistema di checkout

## 📝 Note sul Progetto

- Questo progetto è stato sviluppato **esclusivamente a scopo didattico** per il corso ITS
- Il sito è una **clonazione grafica** di Mediaworld.it, non include funzionalità di e-commerce reali
- Non vengono effettuati acquisti reali
- I dati degli utenti sono gestiti localmente nel browser

## 🤝 Contribuire

Questo è un progetto didattico personale. Se hai suggerimenti o feedback, sono benvenuti!

## 📄 Licenza

Questo progetto è sviluppato per scopi didattici nell'ambito del corso ITS.

## 👤 Autore

Sviluppato per il progetto ITS - **Anno Accademico 2024/2025**

---

**Disclaimer**: Questo progetto è una ricostruzione grafica a scopo didattico. Mediaworld è un marchio registrato e questa applicazione non è affiliata né autorizzata da Mediaworld S.p.A.
