import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, Form } from '@angular/forms';
import { Noticia } from '../../../models/Noticia';
import { NoticiasService } from '../../../services/noticias.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-noticias',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-noticias.component.html',
  styleUrl: './admin-noticias.component.css'
})
export class AdminNoticiasComponent {

  formNoticia: FormGroup;
  listaNoticias: Noticia[] = [];
  textoNoticiaSeleccionada: any;
  verOeditar: number = 0;
  formNoticiaEditar: FormGroup;
  idNoticiaParaEditar: any;

  constructor(
    private fb: FormBuilder,
    private _noticiaService: NoticiasService,
    private toastr: ToastrService,
  ) {
    this.formNoticia = this.fb.group({
      titular: ['', Validators.required],
      noticia: ['', Validators.required],
    })
    this.formNoticiaEditar = this.fb.group({
      titular: ['', Validators.required],
      noticia: ['', Validators.required],
    })
  }

  crearNoticia() {
    const noticia: Noticia = {
      titular: this.formNoticia.value.titular,
      noticia: this.formNoticia.value.noticia,
      fechaCreacion: new Date(),
      fechaActulizacion: new Date()
    }

    this._noticiaService.guardarNoticia(noticia).then(() =>{
      this.toastr.success('¡Noticia registrada con éxito')
      this.formNoticia.reset();
    }, error => {
      console.log(error)
      this.toastr.error('Error al registrar noticia')
    });
    }

    getNoticias() {
      this._noticiaService.getNoticias().subscribe(doc => {
        this.listaNoticias = [];
        doc.forEach((element: any) => {
          this.listaNoticias.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        })
      })
    }

    deleteNoticia(id: any) {
      this._noticiaService.deleteNoticia(id).then(() => {
        this.toastr.error('Noticia eliminada con éxito');
        this.textoNoticiaSeleccionada = '';
        this.verOeditar = 0;
      }, error => {
        this.toastr.error('Error al eliminar noticia')
        console.log(error)
      })
    }

    abrirTextoNoticia(texto: any) {
      this.textoNoticiaSeleccionada = texto;
      this.verOeditar = 1;
    }
    
    abrirEditarNoticia(id: any, titular: any, noticia: any) {
      this.verOeditar = 2;
      this.idNoticiaParaEditar = id;
       this.formNoticiaEditar.patchValue({
         titular: titular,
         noticia: noticia,
       })
    }

    updateNoticia() {
      const noticia: any = {
        titular: this.formNoticiaEditar.value.titular,
        noticia: this.formNoticiaEditar.value.noticia,
        fechaActualizacion: new Date()
      }
      this._noticiaService.updateNoticia(this.idNoticiaParaEditar, noticia).then(() => {
        this.toastr.info('Noticia Actualizada con éxito')
        this.verOeditar = 0;
      }, error => {
        console.log(error)
        this.toastr.error('Error al actualizar noticia')
      })
    }


    ngOnInit(): void {
      this.getNoticias();
    }
}
