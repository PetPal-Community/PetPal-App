import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar-carer',
  standalone: true,
  imports: [],
  templateUrl: './navbar-carer.component.html',
  styleUrl: './navbar-carer.component.css'
})
export class NavbarCarerComponent {
  private authService = inject (AuthService);
  private router = inject(Router);
  isAuthenticated: boolean = false;

  ngOnInit(): void{
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logOut(): void{
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/auth/login'])
  }

  verPerfil(): void{
    this.router.navigate(['/carer/profile'])
  }

  irContratos(): void{
    this.router.navigate(['/carer/contratos'])
  }

  irServicios(): void{
    this.router.navigate(['/carer/servicios'])
  }

  irReviews(): void{
    this.router.navigate(['/carer/reviews'])
  }

  irMensajes(): void{
    this.router.navigate(['/carer/mensajes'])
  }

  reporte(): void{
    this.router.navigate(['/carer/reporte'])
  }





}
