import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiService, Product } from '../../services/api.service';

@Component({
  selector: 'app-telefoni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './telefoni.component.html',
  styleUrl: './telefoni.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelefoniComponent implements OnInit {
  private api = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  products: Product[] = [];
  loading = true;
  error = false;

  ngOnInit(): void {
    // ✅ evita chiamate lato SSR/Node: così la richiesta la fa il browser
    if (!isPlatformBrowser(this.platformId)) return;

    this.api.getProductsByCategory('telefoni').subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.loading = false;

        // ✅ ora questo lo vedi nella Console del browser
        console.log('Telefoni (browser):', data);

        this.cdr.markForCheck();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Errore getProductsByCategory (browser):', err);
        this.error = true;
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
}
