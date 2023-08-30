import { Component, OnInit } from '@angular/core';

import { Publicacion } from './models/publicacion/publicacion.component';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})

export class PublicacionesComponent implements OnInit {

  mensaje: string = '';
  publicaciones: Publicacion[] = [];

  constructor() {}

  ngOnInit() {
    this.getPublicaciones();
  }

  getPublicaciones() {
    const stringJson = JSON.stringify(this.archivoJson);
    let publicaciones = JSON.parse(stringJson);
    this.publicaciones = publicaciones;
  }

  getUserId() {
    //RECIBIR ID DEL REQUEST Y LUEGO RETORNARLO
    return 1;
  }

  generateId() {
    //GENERAR ID PARA LA PUBLICACION EN BASE A LA CANTIDAD DE PUBLICACIONES + 1
    return this.publicaciones.length + 1;
  }

  publicar() {
    let publicacionActual:Publicacion = {id: 0, idUsuario: '', mensaje: ''};
    publicacionActual.id = this.getUserId();
    publicacionActual.idUsuario = this.generateId().toString();
    publicacionActual.mensaje = this.mensaje;
    this.publicaciones.push(publicacionActual);
  }

  private archivoJson = [
    {
      "id": 1,
      "idUsuario": "1234567890",
      "mensaje": "Esta es mi primera publicación"
    },
    {
      "id": 2,
      "idUsuario": "2345678901",
      "mensaje": "Hola a todos!"
    },
    {
      "id": 3,
      "idUsuario": "3456789012",
      "mensaje": "¿Qué tal el día de hoy?"
    },
    {
      "id": 4,
      "idUsuario": "4567890123",
      "mensaje": "Compartiendo un meme gracioso"
    },
    {
      "id": 5,
      "idUsuario": "5678901234",
      "mensaje": "Una foto de mi gato"
    }
  ]
}
