import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ServicioService } from '../../../../../core/services/servicio.service';
import { ServicioResponse } from '../../../../../shared/models/servicios-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiImgPipe } from '../../../../../core/pipes/api-img.pipe';

@Component({
  selector: 'app-servicio-details',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ApiImgPipe],
  templateUrl: './servicio-details.component.html',
  styleUrl: './servicio-details.component.css'
})
export class ServicioDetailsComponent {
  // Inyecta los datos del diálogo
  readonly dialogRef = inject(MatDialogRef<ServicioDetailsComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  serviceId?: number
  private sservice = inject(ServicioService);
  private snackBar = inject(MatSnackBar);
  servicio: ServicioResponse = {} as ServicioResponse;
  
  ngOnInit(): void{
    this.serviceId=this.data; 
    this.cargarServicio()
  }

  cargarServicio(): void{
    this.sservice.obtenerServicioCarerbyId(this.serviceId!).subscribe({
      next: (servicio: ServicioResponse) =>{
        this.servicio = servicio;
      }, error: (err) => {
        this.showSnackBar('Error al cargar el servicio');
      }
    })

  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }


}
