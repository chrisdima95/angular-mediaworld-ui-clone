import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  standalone: true, 
  imports: [RouterModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotfoundComponent {
  constructor(public route: ActivatedRoute) {}
  
  get currentUrl(): string {
    return this.route.snapshot.url.join('/') || 'sconosciuta';
  }
}
