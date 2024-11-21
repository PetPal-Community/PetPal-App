import { Injectable,inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicDocumentsCreateUpdateDTO } from '../../shared/models/docMedic.model';
import { visitEachChild } from 'typescript';
import { MedicDocumentsDetailsDTO } from '../../shared/models/docMedicResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DocmedicService {
  private baseURL = `${environment.baseUrl}/documents`;
  private http = inject(HttpClient);

  getMedicDocumentsAll(): Observable<MedicDocumentsCreateUpdateDTO[]>{
    return this.http.get<MedicDocumentsCreateUpdateDTO[]>(`${this.baseURL}`);
  }
 
  getMedicDocumentId(docId:number): Observable<MedicDocumentsCreateUpdateDTO>{
    return this.http.get<MedicDocumentsCreateUpdateDTO>(`${this.baseURL}/${docId}`);
  }

  getMedicDocumentyVisitId(visitId:number): Observable<MedicDocumentsCreateUpdateDTO[]>{
    return this.http.get<MedicDocumentsCreateUpdateDTO[]>(`${this.baseURL}/visita/${visitId}`);
  } 

  create(docData: MedicDocumentsDetailsDTO): Observable<MedicDocumentsCreateUpdateDTO>{
    return this.http.post<MedicDocumentsCreateUpdateDTO>(`${this.baseURL}`, docData);

  }

  actualizar(docId:number,docData: MedicDocumentsDetailsDTO): Observable<MedicDocumentsCreateUpdateDTO>{
    return this.http.put<MedicDocumentsCreateUpdateDTO>(`${this.baseURL}/${docId}`, docData);
  }

  borrarDoc(docId:number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${docId}`);
  }
}
    