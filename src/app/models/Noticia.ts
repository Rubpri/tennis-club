export class Noticia {
    
    id?: string;
    titular: string;
    noticia: string;
    fechaCreacion: Date;
    fechaActulizacion: Date;

    constructor(
        titular: string,
        noticia: string,
    ){
        this.titular = titular;
        this.noticia = noticia;
        this.fechaCreacion = new Date();
        this.fechaActulizacion = new Date();
    }

}