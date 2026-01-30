import { Component, ChangeDetectionStrategy } from '@angular/core';
  
import { FormComponent } from './form/form.component'; 

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [FormComponent],  
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContattiComponent {}
