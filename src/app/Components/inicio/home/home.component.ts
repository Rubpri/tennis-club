import { Component } from '@angular/core';
import { ResumenLigasComponent } from '../resumen-ligas/resumen-ligas.component';
import { UltimasNoticiasComponent } from '../ultimas-noticias/ultimas-noticias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumenLigasComponent, UltimasNoticiasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
