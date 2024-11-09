import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServicioResponse } from '../../shared/models/servicios-response.model';

import { ServiceRequest } from '../../shared/models/servicios-request.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private baseURL = `${environment.baseUrl}/services`;

  private http = inject(HttpClient);

  getServicesByCuidador(userId: number): Observable<ServicioResponse[]> {
    return this.http.get<ServicioResponse[]>(`${this.baseURL}/user/${userId}`);
  }


  getAllServices(): Observable<ServicioResponse[]> {
    return this.http.get<ServicioResponse[]>(`${this.baseURL}`);
  }

  obtenerServicioCarerbyId(serviceId: number): Observable<ServicioResponse> {
    return this.http.get<ServicioResponse>(`${this.baseURL}/${serviceId}`);
  }

  crearServicioCarer(serviceData: ServiceRequest): Observable<ServicioResponse> {
    return this.http.post<ServicioResponse>(`${this.baseURL}`, serviceData);
  }

  updateService(serviceId: number, serviceData: ServiceRequest): Observable<ServicioResponse> {
    return this.http.put<ServicioResponse>(`${this.baseURL}/${serviceId}`, serviceData)
  }

  deleteService(serviceId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${serviceId}`);
  }

}



