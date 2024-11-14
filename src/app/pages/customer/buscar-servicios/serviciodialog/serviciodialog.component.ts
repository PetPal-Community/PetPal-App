import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ServicioService } from '../../../../core/services/servicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioResponse } from '../../../../shared/models/servicios-response.model';
import { MatButtonModule } from '@angular/material/button';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviciodialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ApiImgPipe],
  templateUrl: './serviciodialog.component.html',
  styleUrl: './serviciodialog.component.css'
})
export class ServiciodialogComponent {
  readonly dialogRef = inject(MatDialogRef<ServiciodialogComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  serviceId?: number
  private sservice = inject(ServicioService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
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

  crearContrato(servicioId:number): void {
    this.dialogRef.close();
    this.router.navigate([`/customer/crearContrato/${servicioId}`]);
    
  }


}
