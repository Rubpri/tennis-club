import { Component } from '@angular/core';
import { NoticiasService } from '../../../services/noticias.service';
import { CommonModule } from '@angular/common';
import { Noticia } from '../../../models/Noticia';


@Component({
  selector: 'app-ultimas-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ultimas-noticias.component.html',
  styleUrl: './ultimas-noticias.component.css'
})
export class UltimasNoticiasComponent {
  
  listaNoticias: Noticia[] = []
  tresUltimasNoticias: any[] = [];

  constructor(
    private _noticiasService: NoticiasService,
  ){}

  getNoticias() {
    this._noticiasService.getNoticias().subscribe(doc => {
      this.listaNoticias = [];
     
      doc.forEach((element: any) => {
        this.tresUltimasNoticias.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      this.listaNoticias = this.tresUltimasNoticias.slice(-4);
    })
  }

  ngOnInit() {
    this.getNoticias();
  }

}
