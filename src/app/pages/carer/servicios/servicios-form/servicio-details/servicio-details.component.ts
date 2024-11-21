import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ServicioService } from '../../../../../core/services/servicio.service';
import { ServicioResponse } from '../../../../../shared/models/servicios-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiImgPipe } from '../../../../../core/pipes/api-img.pipe';
import { ServicioDialogComponent } from '../servicio-dialog/servicio-dialog.component';

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
  readonly dialog = inject(MatDialog);
  private servicioService = inject(ServicioService);
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

  cerrar(): void{
    this.dialogRef.close()
  }

  editar(servicioId: number): void {
    const dialogRef = this.dialog.open(ServicioDialogComponent, {
      data: { id: servicioId }  // Asegúrate de pasar un objeto con el servicioId
    });
  }


  eliminar(servicioId: number): void{
    this.servicioService.deleteService(servicioId).subscribe({
      next:()=>{
        this.dialogRef.close();
        window.location.reload();
      },
      error:(e)=>{
        console.log("Error" + e)
      }
    })
  }


}
