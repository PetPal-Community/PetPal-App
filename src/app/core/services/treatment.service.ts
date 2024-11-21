import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreatmentDetailsDTO } from '../../shared/models/treatmentResponse.model';
import { TreatmentCreateUpdateDTO } from '../../shared/models/treatment.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private baseURL = `${environment.baseUrl}/treatments`;
  private http = inject(HttpClient);
  
  getTreatmentsAll(): Observable<TreatmentDetailsDTO[]>{
    return this.http.get<TreatmentDetailsDTO[]>(`${this.baseURL}`);
  }

  getTreatmentId(treatId:number):Observable<TreatmentDetailsDTO>{
    return this.http.get<TreatmentDetailsDTO>(`${this.baseURL}/${treatId}`);
  }

  create(docData: TreatmentCreateUpdateDTO): Observable<TreatmentDetailsDTO>{
    return this.http.post<TreatmentDetailsDTO>(`${this.baseURL}`,docData);
  }

  actualizarDoc(treatId: number, docData:TreatmentCreateUpdateDTO): Observable<TreatmentDetailsDTO>{
    return this.http.put<TreatmentDetailsDTO>(`${this.baseURL}/${treatId}`,docData);
  }

  borrarDoc(docId:number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${docId}`);
  }
} 
   