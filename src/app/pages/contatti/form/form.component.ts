import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  contactForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    descrizione: new FormControl(''),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form inviato:', this.contactForm.value);
      // qui puoi aggiungere la logica per inviare i dati a un server
      alert('Messaggio inviato con successo!');
      this.contactForm.reset();
    }
  }
}
