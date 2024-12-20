import { Component, OnInit, Input, inject } from '@angular/core';
import { ServicioResponse } from '../../../../shared/models/servicios-response.model';
import { AuthService } from '../../../../core/services/auth.service';
import { ServicioService } from '../../../../core/services/servicio.service';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ServicioDialogComponent } from '../servicios-form/servicio-dialog/servicio-dialog.component';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ServicioDetailsComponent } from '../servicios-form/servicio-details/servicio-details.component';

@Component({
  selector: 'app-servicios-list',
  standalone: true,
  imports: [CommonModule,NgClass, ApiImgPipe, MatCardModule, MatIconModule],
  templateUrl: './servicios-list.component.html',
  styleUrl: './servicios-list.component.css'
})
export class ServiciosListComponent implements OnInit{
  

  servicios: ServicioResponse[] = [];

  private route = inject(Router)
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
    const userId = authData?.id;
    if(userId){
      this.SService.getServicesByCuidador(userId).subscribe({
        next:(serv) =>{
          console.log(serv)
          this.servicios = serv;
        }

      })
    }
  }
  
  cargarServicioPorId(servicioId: number): void{
    this.dialog.open(ServicioDetailsComponent,{
      data: servicioId
    });
  }


  irCrearServicio(): void{
    const dialogRef = this.dialog.open(ServicioDialogComponent); 
  }

  


}
