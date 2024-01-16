import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paisesUrl = 'http://localhost:8090/paises?';
  hey = 'page=3&size=5&order=id&asc=false';

  constructor(private httpClient:HttpClient) { }

  public paises(page:number, size:number, order:string, asc:boolean):Observable<any>{
    
    return this.httpClient.get<any>(this.paisesUrl + `page=${page}&size=${size}&order=${order}&asc=${asc}`);

  }
}












