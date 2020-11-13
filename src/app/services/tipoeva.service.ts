import { Injectable } from '@angular/core';
import {Observable, Subscription, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Tipoeva } from '../models/tipoeva';
@Injectable({
  providedIn: 'root'
})
export class TipoevaService {
  private  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private TipoEvaUrl:string = 'http://localhost:8080/tipoevaluacion';
  constructor(private  http : HttpClient) { }

  getTipoevas():Observable<Tipoeva[]>{
    return this.http.get<Tipoeva[]>(this.TipoEvaUrl+'/all');
  }
  getTipoeva(id:number):Observable<Object> {
    return this.http.get(`${this.TipoEvaUrl}/${id}`);
  }
  updateLogica(id:number):Observable<number> {
    return this.http.put<number>(`${this.TipoEvaUrl}/update/logica/${id}`,{headers:this.httpHeaders});
  }
  addTipoeva(tipoeva: Tipoeva): Observable<number>{
    return this.http.post<number>(this.TipoEvaUrl+"/add", tipoeva, {headers:this.httpHeaders});
  }

  deleteTipoeva(id: number): Observable<number>{
    return this.http.delete<number>(this.TipoEvaUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateTipoeva(tipoeva: Tipoeva):Observable<number> {
    return this.http.put<number>(`${this.TipoEvaUrl}/update/${tipoeva.id_tipo_eva}`, tipoeva,{headers:this.httpHeaders});
  }

}
