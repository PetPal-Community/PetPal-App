import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MascotaResponse } from '../../shared/models/mascota-response.model';
import { MascotaRequest } from '../../shared/models/mascota-request.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private baseURL = `${environment.baseUrl}/pets`;

  private http = inject(HttpClient);

  getPetsbyUserGId(userId: number): Observable<MascotaResponse[]> {
    return this.http.get<MascotaResponse[]>(`${this.baseURL}/user/${userId}`);
  }

  verTODASlasMascotas(): Observable<MascotaResponse[]> {
    return this.http.get<MascotaResponse[]>(`${this.baseURL}`);
  }

  obtenerMascotaById(mascotaId: number): Observable<MascotaResponse> {
    return this.http.get<MascotaResponse>(`${this.baseURL}/${mascotaId}`);
  }

  crearMascota(mascotaData: MascotaRequest): Observable<MascotaResponse> {
    return this.http.post<MascotaResponse>(`${this.baseURL}`, mascotaData);
  }

  actualizarMascota(mascotaId: number, mascotaData: MascotaRequest): Observable<MascotaResponse> {
    return this.http.put<MascotaResponse>(`${this.baseURL}/${mascotaId}`, mascotaData);
  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }


}

  
