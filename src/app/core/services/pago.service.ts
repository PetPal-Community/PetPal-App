import { inject,Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagoResponse } from '../../shared/models/pago-response.model';
import { PagoRequest } from '../../shared/models/pago-request.model';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private baseURL = `${environment.baseUrl}/pagos`;
  private http = inject(HttpClient);

  obtenerTodosPagos(): Observable<PagoResponse[]>{
    return this.http.get<PagoResponse[]>(`${this.baseURL}`);
  }

  obtenerPagoPorPagoId(pagoId:number): Observable<PagoResponse>{
    return this.http.get<PagoResponse>(`${this.baseURL}/${pagoId}`);
  }
  
  obtenerPagoPorContratoId(contratoId:number): Observable<PagoResponse>{
    return this.http.get<PagoResponse>(`${this.baseURL}/contrat/${contratoId}`);
  }

  crearPago(pagoData:PagoRequest): Observable<PagoResponse> {
    return this.http.post<PagoResponse>(`${this.baseURL}`, pagoData);
  }

  actualizarPago(pagoId:number,pagoData:PagoRequest): Observable<PagoResponse> {
    return this.http.post<PagoResponse>(`${this.baseURL}/${pagoId}`, pagoData);
  }

  borrarPago(pagoId:number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${pagoId}`);
  }

}
    