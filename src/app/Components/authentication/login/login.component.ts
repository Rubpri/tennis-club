import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ReactiveFormsModule, Form } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm: FormGroup;
  public user: string | null;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.user = '';
  }

  login() {
    if (this.loginForm.valid){
      this.authenticationService.login(this.loginForm.value)
        .then(response => {
          this.toastr.success('Logueado con éxito')
          this.router.navigate(['/'])
          console.log(response.user.email)
          this.user = response.user.email;
        })
        .catch(error => console.log(error))
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up'])
  }

}
