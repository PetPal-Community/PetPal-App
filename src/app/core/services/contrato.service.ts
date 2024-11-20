import { Injectable, inject } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ContratosResponse } from '../../shared/models/contratos-response.model';
import { Observable } from 'rxjs';
import { ContratosRequest } from '../../shared/models/contratos-request.model';
import { ContratosReport } from '../../shared/models/contratos-report.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private baseURL = `${environment.baseUrl}/contrats`;

  private http = inject(HttpClient);

  getContratoByCarerId(carerId: number): Observable<ContratosResponse[]> {
    return this.http.get<ContratosResponse[]>(`${this.baseURL}/user/${carerId}`);
  }

  getContratoByCustomerId(customerId: number): Observable<ContratosResponse[]> {
    return this.http.get<ContratosResponse[]>(`${this.baseURL}/customer/${customerId}`);
  }

  getAllContrats(): Observable<ContratosResponse[]>{
    return this.http.get<ContratosResponse[]>(`${this.baseURL}`);
  }

  getContratobyId(contratoId:number): Observable<ContratosResponse>{
    return this.http.get<ContratosResponse>(`${this.baseURL}/${contratoId}`);
  }


  getContractReportByMonth(cuidadorId: number, mes: number, anio: number): Observable<ContratosReport> {
    const params = new HttpParams()
      .set('mes', mes.toString())
      .set('anio', anio.toString());

    return this.http.get<ContratosReport>(`${this.baseURL}/reporte/${cuidadorId}`, { params });
  }


  crearContrato(contratoData: ContratosRequest): Observable<ContratosResponse>{
    return this.http.post<ContratosResponse>(`${this.baseURL}`, contratoData)
  }

  actualizarContrato(contratoId:number, contratoData: ContratosRequest): Observable<ContratosResponse>{
    return this.http.put<ContratosResponse>(`${this.baseURL}/${contratoId}`, contratoData)
  }

  borrarContrato(contratoId: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${contratoId}`);
  }

  actualizarEstadoContrato(contratoId:number, estado:string): Observable<ContratosResponse>{
    return this.http.patch<ContratosResponse>(`${this.baseURL}/${contratoId}/estado`,estado)
  }

}

   