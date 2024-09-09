import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ResumenLigasComponent } from './Components/inicio/resumen-ligas/resumen-ligas.component';
import { UltimasNoticiasComponent } from './Components/inicio/ultimas-noticias/ultimas-noticias.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ResumenLigasComponent, UltimasNoticiasComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tennis-club';

  constructor(private router: Router) {

  }

  navigateToHome() {
    this.router.navigate([''])
  }

}
