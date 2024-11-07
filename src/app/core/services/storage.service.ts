import { Injectable } from '@angular/core';
import { AuthResponse } from '../../shared/models/auth-response.model';

@Injectable({
    providedIn: 'root'
  })
  export class StorageService {
    private authKey = 'petpal_auth';
  
    constructor() {}
  
    setAuthData(data: AuthResponse): void {
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.authKey, JSON.stringify(data));
      }
    }
  
    getAuthData(): AuthResponse | null {
      if (typeof window !== 'undefined' && localStorage.getItem(this.authKey)) {
        const data = localStorage.getItem(this.authKey);
        return data ? JSON.parse(data) as AuthResponse : null;
      }
      return null;
    }

    clearAuthData(): void {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.authKey);
      }
    }
  }