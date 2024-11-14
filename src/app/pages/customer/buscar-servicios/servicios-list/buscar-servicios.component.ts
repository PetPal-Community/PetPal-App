import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ServicioResponse } from '../../../../shared/models/servicios-response.model';
import { ServicioService } from '../../../../core/services/servicio.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ServicioDetailsComponent } from '../../../carer/servicios/servicios-form/servicio-details/servicio-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiciodialogComponent } from '../serviciodialog/serviciodialog.component';

@Component({
  selector: 'app-buscar-servicios',
  standalone: true,
  imports: [CommonModule,NgClass, ApiImgPipe, MatCardModule, MatIconModule],
  templateUrl: './buscar-servicios.component.html',
  styleUrl: './buscar-servicios.component.css'
})
export class BuscarServiciosComponent {
  servicios: ServicioResponse[] = [];
  private SService = inject(ServicioService)
  private authService = inject(AuthService);
  readonly dialog = inject(MatDialog);
  isCarer: boolean = false;

  ngOnInit(): void{
    this.isCarer = this.authService.getUserRole() === 'CARER';
    this.cargarServicios();
  }

  cargarServicios(): void {
    const authData = this.authService.getUser();
    this.SService.getAllServices().subscribe({
      next:(serv)=>{
        this.servicios = serv;
      }
    })
  }
  
  cargarServicioPorId(servicioId: number): void{
    this.dialog.open(ServiciodialogComponent,{
      data: servicioId
    });
  }

}
