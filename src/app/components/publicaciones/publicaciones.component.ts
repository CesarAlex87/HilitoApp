import { Component, OnInit } from '@angular/core';

import { Publicacion } from './models/publicacion/publicacion.component';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})

export class PublicacionesComponent implements OnInit {


  publicaciones: Publicacion[] = [];

  constructor() {
    this.publicaciones = this.getPublicaciones();
  }

  ngOnInit() {

  }

  getPublicaciones() {


    console.log(this.publicaciones);
    return this.publicaciones;
  }

  getUserId() {
  }

  publicar() {
  }
}
