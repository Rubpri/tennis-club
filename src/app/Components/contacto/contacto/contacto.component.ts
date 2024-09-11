import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  public contactoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      privacidad: [false, Validators.requiredTrue]
    })
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      this.toastr.success('¡Mensaje enviado con éxito!')
      this.contactoForm.reset();
    } else {
      this.toastr.error('Completa todos los campos')
    }
  }
}
