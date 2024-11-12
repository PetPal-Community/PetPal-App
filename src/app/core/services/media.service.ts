import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadMediaResponse } from '../../shared/models/upload-media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private baseURL = `${environment.baseUrl}/media`;

  private http = inject(HttpClient);

  subirArchivo(formData: FormData ): Observable<UploadMediaResponse> {
    return this.http.post<UploadMediaResponse>(
      `${this.baseURL}/upload`,
      formData
    );
  }

  verArchivo(filename: string): Observable<Blob> {
    const url = `${this.baseURL}/${filename}`;
    return this.http.get(url, { responseType: 'blob' });
  }

}
