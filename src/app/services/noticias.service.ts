import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Noticia } from '../models/Noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  guardarNoticia(noticia: Noticia): Promise<any> {
    return this.firestore.collection('noticias').add(noticia);
  }

  getNoticias(): Observable<any> {
    return this.firestore.collection('noticias', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  deleteNoticia(id: string): Promise<any> {
    return this.firestore.collection('noticias').doc(id).delete()
  }

  updateNoticia(id: string, noticia: any): Promise<any> {
    return this.firestore.collection('noticias').doc(id).update(noticia);
  }
}
