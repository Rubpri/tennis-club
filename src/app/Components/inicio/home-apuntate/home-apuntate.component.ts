import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-apuntate',
  standalone: true,
  imports: [],
  templateUrl: './home-apuntate.component.html',
  styleUrl: './home-apuntate.component.css'
})
export class HomeApuntateComponent {

  constructor(
    private router: Router,
  ) {}

  navigateToHazteSocio(){
    this.router.navigate(["/el-club/hazte-socio"]);
  }

}
