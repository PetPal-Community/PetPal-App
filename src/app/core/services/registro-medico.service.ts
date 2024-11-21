import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { VisitaResponse } from '../../shared/models/visitaMedica-response.model';
import { HttpClient } from '@angular/common/http';
import { VisitaRequest } from '../../shared/models/visitaMedica-request.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroMedicoService {
  private baseURL = `${environment.baseUrl}/medicvisit`;
  private http = inject(HttpClient);

  getTodasVisitasMedicas(): Observable<VisitaResponse>{
    return this.http.get<VisitaResponse>(`${this.baseURL}`);
  }

  getVisitaById(visitaId: number): Observable<VisitaResponse>{
    return this.http.get<VisitaResponse>(`${this.baseURL}/${visitaId}`);
  }

  crearVisitaMedica(visitaData: VisitaRequest): Observable<VisitaResponse>{
    return this.http.post<VisitaResponse>(`${this.baseURL}`,visitaData);
  }

  actualizarVisitaMedica(visitaId:number,visitaData: VisitaRequest): Observable<VisitaResponse>{
    return this.http.put<VisitaResponse>(`${this.baseURL}/${visitaId}`,visitaData);
  }

  deleteVisitaMedica(visitaId:number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${visitaId}`);
  }

  getVisitaByUserId(userId: number): Observable<VisitaResponse[]>{
    return this.http.get<VisitaResponse[]>(`${this.baseURL}/user/${userId}`);
  }

}


    
    
