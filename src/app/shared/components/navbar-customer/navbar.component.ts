import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  private authService = inject(AuthService);
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
    this.router.navigate(['/customer/profile']);
  }

  irMascotas(): void{
    this.router.navigate(['/customer/mascotas']);
  }


  irPanelControl(): void{
    this.router.navigate(['/customer/panelControl']);
  }

  irRecordatorios(): void{
    this.router.navigate(['/customer/recordatorios']);
  }

  irRegistrosMedicos(): void{
    this.router.navigate(['/customer/registrosMedicos']);
  }

  irBuscarServicios(): void{
    this.router.navigate(['/customer/buscarServicios']);
  }

  irMensajes(): void{
    this.router.navigate(['/customer/mensajes']);
  }

  irContacto(): void{
    this.router.navigate(['/customer/contactosEmergencia']);
  }

  
}
