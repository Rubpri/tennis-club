import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ReactiveFormsModule, Form } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  public signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registrarse(){
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.authenticationService.register(this.signUpForm.value)
        .then(response => {
          this.router.navigate(['/login']);
          this.toastr.success('Usuario registrado');
        })
        .catch(error => {
          console.log(error);
          this.toastr.error('Error al registrarse. Pruebe con otro email o contraseña.')
    });
    } else {
      this.toastr.error('Complete todos los campos')
    }
  } 

  navigateToLogin() {
    this.router.navigate(['/login'])
  }

}
