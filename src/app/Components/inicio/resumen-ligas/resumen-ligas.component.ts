import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-ligas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-ligas.component.html',
  styleUrl: './resumen-ligas.component.css'
})
export class ResumenLigasComponent {

  public currentCard: number;

  constructor(private router: Router) {
    this.currentCard = 1;
  }

  navigateToCampeonatosDivisionDeHonor() {
    this.router.navigate(['/campeonatos/division-de-honor'])
  }

  navigateToCampeonatosPrimeraDivision() {
    this.router.navigate(['/campeonatos/primera-division'])
  }

  navigateToCampeonatosSegundaDivision() {
    this.router.navigate(['/campeonatos/segunda-division'])
  }


}
