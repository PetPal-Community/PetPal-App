import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ContratosResponse } from '../../shared/models/contratos-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private baseURL = `${environment.baseUrl}/contrats`;

  private http = inject(HttpClient);

  getContratoByCarerId(carerId: number): Observable<ContratosResponse[]> {
    return this.http.get<ContratosResponse[]>(`${this.baseURL}/user/${carerId}`);
  }
}
