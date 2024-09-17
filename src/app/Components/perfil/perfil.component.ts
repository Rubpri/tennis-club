import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  userEmail: string | null = null;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    
  }

  logOut() {
    this.authenticationService.logout()
      .then(() => {
        this.router.navigate(['/login'])
        this.toastr.success('Sesión cerrada')
      }) 
      .catch(error => console.log(error))
  }

  ngOnInit(): void {
    this.authenticationService.user$.subscribe(user => {
      this.userEmail = user?.email || null;
    });
  }

}
