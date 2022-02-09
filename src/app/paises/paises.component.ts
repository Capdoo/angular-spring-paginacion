import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit {

  paises: Array<any> = new Array

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
      this.cargarPaises();
  }

  cargarPaises(){
    this.paisesService.paises(this.page,this.size,this.order, this.asc).subscribe(
      data => {
        this.paises=data.content;
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }

}
