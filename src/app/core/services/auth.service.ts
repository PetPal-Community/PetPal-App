import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { AuthRequest } from '../../shared/models/auth-request.model';
import { Observable,tap } from 'rxjs';
import { AuthResponse } from '../../shared/models/auth-response.model';
import { RegisterCustomer } from '../../shared/models/register-request-customer.model';
import { RegisterResponse } from '../../shared/models/register-response.model';
import { RegisterCarer } from '../../shared/models/register-request-carer.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = `${environment.baseUrl}/authenticacion`;

  private http= inject(HttpClient);
  private storageService = inject(StorageService);

  constructor() { }


  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseURL}/login`, authRequest).pipe(
      tap(response => this.storageService.setAuthData(response))
    );
  }

  registerCustomer(registerRequest: RegisterCustomer): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseURL}/registrar/customer`, registerRequest);
  }

  registerCarer(registerRequest: RegisterCarer): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseURL}/registrar/carer`, registerRequest);
  }


  logout(): void {
    this.storageService.clearAuthData();
  }

  isAuthenticated(): boolean {
    return this.storageService.getAuthData() !== null;
  }

  getUserRole(): string | null {
    const authData = this.storageService.getAuthData();
    return authData ? authData.role : null;
  }

  getUser(): AuthResponse | null {
    const authData = this.storageService.getAuthData();
    return authData ? authData : null;
  }
}