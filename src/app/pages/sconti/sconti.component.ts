import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sconti',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sconti.component.html',
  styleUrls: ['./sconti.component.css']
})
export class ScontiComponent {
  selectedAgeGroup: 'under30' | 'over45' | 'other' | null = null;

  getDiscountMessage(): string {
    switch (this.selectedAgeGroup) {
      case 'under30':
        return 'Per te che sei Under 30 sconto del 50% su tutto!';
      case 'over45':
        return 'Per te che sei Over 45 sconto del 40% su tutto!';
      case 'other':
        return 'Non ci sono sconti specifici per la tua fascia d’età.';
      default:
        return '';
    }
  }
}
