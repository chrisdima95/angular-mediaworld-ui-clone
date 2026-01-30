# Mediaword 🛍️

**Progetto ITS - Clone grafico di Mediaworld.it (Aprile 2025)**  
**Aggiornamento (Gennaio 2026): Upgrade Angular 19 ➜ Angular 21 + Backend Django/DRF**

Questo progetto è una ricostruzione grafica del sito **Mediaworld.it**, sviluppata come progetto per l'esame di Angular del corso ITS (Istituto Tecnico Superiore). L'applicazione replica interfaccia e UX di un e-commerce, usando un frontend Angular moderno e (ora) un backend reale per fornire dati via API.

---

## 📋 Descrizione

Mediaword è un’applicazione e-commerce sviluppata in **Angular**, che emula l’aspetto grafico e la struttura del sito Mediaworld.it. Il progetto dimostra competenze in:

- Sviluppo front-end con framework moderni
- Progettazione UI/UX responsive
- Gestione dello stato dell'applicazione
- Routing e lazy loading
- Server-Side Rendering (SSR)
- Progressive Web App (PWA)
- (Nuovo) Backend REST con **Django + Django REST Framework (DRF)**

---

## 🔄 Aggiornamenti principali (Gennaio 2026)

Durante lo stage il progetto è stato aggiornato e reso più “robusto” per lo sviluppo reale:

- ✅ **Upgrade Angular**: da **Angular 19** a **Angular 21** (passando per Angular 20)
- ✅ **Allineamento toolchain**: CLI, builder e SSR allineati alla stessa major di Angular
- ✅ **Aggiornamento TypeScript** alla versione compatibile con Angular 21
- ✅ **Stabilizzazione build**:
  - prerender/SSR resi più sicuri per non fallire in assenza di backend raggiungibile
  - budgets aggiornati per evitare errori bloccanti in build (può restare qualche warning non bloccante)
- ✅ **Aggiunta cartella `backend/`** con un backend **Django/DRF** collegato al frontend tramite proxy

> Alcune migrazioni “opzionali” proposte da Angular sono state volutamente rimandate per eseguirle in modo controllato (commit separati), evitando refactor massivi automatici.

---

## 🚀 Tecnologie Utilizzate

### Frontend
- **Angular 21.1.x** - Framework principale
- **TypeScript 5.9.x** - Linguaggio di programmazione
- **RxJS 7.8.x** - Programmazione reattiva
- **Angular SSR** - Server-Side Rendering
- **Angular Service Worker** - Supporto PWA
- **HTML5, CSS3** - Markup e styling

### Backend
- **Django** - Framework backend
- **Django REST Framework (DRF)** - API REST
- **django-cors-headers** - CORS (opzionale: con proxy spesso non necessario)

---

## ✨ Funzionalità

### 🏠 Pagine Principali
- **Home**: Pagina principale con carousel dei prodotti in evidenza
- **TV**: Catalogo televisori
- **Elettrodomestici**: Catalogo elettrodomestici
- **Telefoni**: Catalogo smartphone
- **Sconti**: Pagina dedicata alle offerte speciali
- **Contatti**: Pagina con form di contatto
- **Login/Registrazione**: Sistema di autenticazione utente (prototipo)
- **Carrello**: Gestione prodotti nel carrello
- **Checkout**: Procedura di checkout (prototipo)

### 🔧 Caratteristiche Tecniche
- **Componenti Standalone**: architettura moderna con componenti standalone
- **Lazy Loading**: route lazy per performance migliori
- **Routing Protetto**: guard per route riservate
- **Gestione Stato**: servizi per carrello e autenticazione
- **Change Detection Ottimizzata**: strategia `OnPush` per performance
- **SSR**: configurazione per SEO e tempi di caricamento
- **PWA**: service worker configurato
- **Responsive Design**: ottimizzato per desktop/tablet/mobile
- **(Nuovo) Integrazione Backend**: API reali Django/DRF consumate dal frontend tramite proxy

---

## 📦 Installazione

### Prerequisiti
Assicurati di avere installato:
- **Node.js** (versione recente supportata)
- **npm** (incluso con Node.js)

### Avvio (frontend)
- Installa le dipendenze del progetto tramite npm
- Avvia il server di sviluppo Angular
- Apri l’app in browser sull’indirizzo locale standard di Angular

---

## 🛠️ Script Disponibili

- **Server di sviluppo**: avvio dell’app in modalità sviluppo con reload automatico
- **Build produzione**: compilazione ottimizzata per la distribuzione
- **Test unitari**: esecuzione dei test (se configurati nel progetto)

---

## 📁 Struttura del Progetto (panoramica)

- `src/`: sorgenti Angular
  - `src/app/layout/`: componenti di layout (navbar, footer)
  - `src/app/pages/`: pagine dell’app (home, tv, elettrodomestici, telefoni, carrello, checkout, login, contatti, ecc.)
  - `src/app/services/`: servizi (API, carrello, auth, ecc.)
  - `src/app/guards/`: route guards
- `public/`: asset statici (immagini, manifest, ecc.)
- `backend/`: backend Django/DRF (nuovo)
- `proxy.conf.json`: configurazione proxy per inoltrare le chiamate `/api/...` a Django
- `angular.json`: configurazione Angular (incl. budgets/build settings)
- `package.json`: dipendenze e script del progetto

---

## 🎨 Design e UI

Il progetto replica fedelmente l’interfaccia grafica di Mediaworld.it, mantenendo:

- **Schema colori**: rosso/nero/bianco
- **Tipografia**: Montserrat e Inter
- **Layout**: struttura simile al sito originale
- **Componenti**: cards prodotti, carousel, navbar, footer
- **Responsive**: adattivo su più dispositivi

---

## ⚙️ Configurazione

### Variabili d’Ambiente
Attualmente non sono richieste variabili d’ambiente obbligatorie per usare l’app in sviluppo.

### Build di Produzione
La build di produzione genera gli output nella cartella `dist/` del progetto.

---

# 🧩 Backend Django/DRF

Nel repository è presente una cartella `backend/` che contiene un backend **Django + DRF** pensato per fornire dati reali al frontend.

## 🎯 Obiettivo del backend
Esporre due API principali e collegarle ad Angular in modo semplice:

### ✅ Ping API
- **Endpoint**: `/api/ping/`
- **Scopo**: verificare che backend e proxy funzionino correttamente
- **Risposta**: JSON con stato “ok”

### ✅ Products API (CRUD + filtro)
- **Endpoint**: `/api/products/`
- **Operazioni**:
  - lista prodotti
  - creazione prodotto (utile in sviluppo)
  - dettaglio singolo prodotto
- **Filtro**:
  - parametro `category` per filtrare i prodotti (es. telefoni, tv, elettrodomestici)

## 🔌 Collegamento Angular ⇄ Django (Proxy)
Per evitare problemi di CORS e usare URL puliti nel frontend:
- Angular usa chiamate relative come `/api/...`
- il proxy inoltra automaticamente le richieste al backend Django locale

Risultato: in sviluppo lavori “come se” Angular e Django fossero sullo stesso dominio.

## 🧠 SSR: chiamate API solo nel browser
Con SSR attivo, alcune chiamate potrebbero partire lato server. Per evitare errori e per vedere le chiamate in Network del browser:
- alcune richieste sono protette da una **SSR guard** (eseguite solo in ambiente browser)

Esempi tipici nel progetto:
- **Home**: chiamata ping al backend con guard SSR
- **Telefoni**: caricamento prodotti filtrati con guard SSR

## 🌱 Seed prodotti (popolamento rapido)
È previsto un piccolo “seed” per inserire rapidamente un set di prodotti di esempio nel database, senza dover creare tutto manualmente tramite interfaccia/endpoint.

---

## ▶️ Avvio completo (Full Stack)

Per lavorare in modalità full-stack:
- avvia prima il backend Django
- avvia poi il frontend Angular con proxy attivo
- verifica che gli endpoint `/api/...` rispondano tramite l’app

---

## 🔒 Autenticazione

Il sistema di autenticazione è implementato come prototipo:

- **Login**: accetta qualsiasi email valida e password non vuota
- **Registrazione**: crea un utente con email e password
- **Storage**: dati salvati nel localStorage
- **Guards**: route protette con `AuthGuard` e `NotAuthGuard`

---

## 🛒 Carrello

Il carrello implementa:

- aggiunta/rimozione prodotti
- modifica quantità
- calcolo totale automatico
- persistenza durante la sessione
- integrazione con checkout (prototipo)

---

## 📝 Note sul Progetto

- progetto sviluppato **a scopo didattico**
- clonazione grafica: non include acquisti reali
- nessun pagamento o transazione reale
- dati utenti gestiti localmente nel browser
- backend Django/DRF usato per simulare dati “reali” e integrazione frontend-backend

---

## 🤝 Contribuire

Questo è un progetto didattico personale. Suggerimenti e feedback sono benvenuti!

---

## 📄 Licenza

Questo progetto è sviluppato per scopi didattici nell'ambito del corso ITS.

---

## 👤 Autore

Sviluppato per il progetto ITS - **Anno Accademico 2024/2025**

---

**Disclaimer**: Questo progetto è una ricostruzione grafica a scopo didattico. Mediaworld è un marchio registrato e questa applicazione non è affiliata né autorizzata da Mediaworld S.p.A.
