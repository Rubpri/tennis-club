import { Component } from '@angular/core';
import { ResumenLigasComponent } from '../resumen-ligas/resumen-ligas.component';
import { UltimasNoticiasComponent } from '../ultimas-noticias/ultimas-noticias.component';
import { HomeApuntateComponent } from '../home-apuntate/home-apuntate.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumenLigasComponent, UltimasNoticiasComponent, HomeApuntateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
