import { Component } from '@angular/core';
import { NoticiasService } from '../../../services/noticias.service';
import { CommonModule } from '@angular/common';
import { Noticia } from '../../../models/Noticia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  
  listaNoticias: Noticia[] = []

  constructor(
    private _noticiasService: NoticiasService,
    private router: Router,
  ){}

  getNoticias() {
    this._noticiasService.getNoticias().subscribe(doc => {
      this.listaNoticias = [];
      doc.forEach((element: any) => {
        this.listaNoticias.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
  }

  navigateToAdminNoticias() {
    this.router.navigate(['/admin-noticias'])
  }

  ngOnInit() {
    this.getNoticias();
  }

}
