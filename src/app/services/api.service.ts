import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PingResponse {
  status: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;       // Decimal DRF spesso arriva come stringa
  image_url: string;
  category: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  // ✅ health check backend
  ping(): Observable<PingResponse> {
    return this.http.get<PingResponse>('/api/ping/');
  }

  // ✅ lista completa prodotti
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products/');
  }

  // ✅ solo prodotti di una categoria
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products/', {
      params: { category }
    });
  }
}
