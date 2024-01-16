import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit {

  paises: Array<any> = new Array
  totalPages : Array<number> = new Array

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  //Para validar si esta en la pagina 1 y final
  isFirst = false
  isLast = false

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {
      this.cargarPaises();
  }

  cargarPaises(){
    this.paisesService.paises(this.page,this.size,this.order, this.asc).subscribe(
      data => {
        this.paises = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;

        this.totalPages = new Array(data['totalPages']);

        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  sort(): void{
    this.asc = !this.asc;
    this.cargarPaises();
  }

  rewind(): void{
    if(!this.isFirst){
      this.page--;
      this.cargarPaises();
    }
  }

  forward(): void{
    if(!this.isLast){
      this.page++;
      this.cargarPaises();
    }
  }

  setPage(page: number): void{
    this.page = page;
    this.cargarPaises();
  }

  setOrder(order: string): void{
    this.order = order;
    this.cargarPaises();
  }

}
