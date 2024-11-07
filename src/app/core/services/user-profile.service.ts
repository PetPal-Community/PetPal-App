import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPersonaResponse } from '../../shared/models/userPersona-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseURL = `${environment.baseUrl}/userGeneral`;

  private http = inject(HttpClient);

  getUserProfile(userId: number): Observable<UserPersonaResponse> {
    return this.http.get<UserPersonaResponse>(`${this.baseURL}/${userId}`);
  }

  updateUserProfile(userId: number, profileData: UserPersonaResponse) {
    return this.http.put<UserPersonaResponse>(`${this.baseURL}/${userId}`, profileData);

  }
}





