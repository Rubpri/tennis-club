import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hazte-socio',
  standalone: true,
  imports: [],
  templateUrl: './hazte-socio.component.html',
  styleUrl: './hazte-socio.component.css'
})
export class HazteSocioComponent {
  
  constructor(private router: Router){

  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

}
