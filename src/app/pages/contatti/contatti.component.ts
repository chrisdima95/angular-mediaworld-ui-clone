import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormComponent } from './form/form.component'; 

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, FormComponent],  
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContattiComponent {}
