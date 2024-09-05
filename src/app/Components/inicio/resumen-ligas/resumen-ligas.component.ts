import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen-ligas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-ligas.component.html',
  styleUrl: './resumen-ligas.component.css'
})
export class ResumenLigasComponent {

  public currentCard: number;

  constructor() {
    this.currentCard = 1;
  }

}
