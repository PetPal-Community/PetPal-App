import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ServiceRequest } from '../../../../../shared/models/servicios-request.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from '../../../../../core/services/servicio.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';
@Component({
  selector: 'app-servicio-dialog',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogModule, MatInputModule,
    MatDialogActions,  MatDialogClose, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './servicio-dialog.component.html',
  styleUrl: './servicio-dialog.component.css'
})
export class ServicioDialogComponent {
  serviceForm: FormGroup;
  private sf = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService)
  private snackBar = inject(MatSnackBar);
  private sservice = inject(ServicioService);

  constructor(){
    this.serviceForm = this.sf.group(
      {
        tipo_servicio: [' ', [Validators.required]],
        descripcion: [' ', [Validators.required]],
        precio: [' ', [Validators.required]],
        picRuta: ['']
      }
    )
  }
  
  onSubmit(){
    if(this.serviceForm.valid){
      const user = this.authService.getUser();
      const userId = user?.id;

      if(userId){
        const serviceData = this.serviceForm.value;
        serviceData.cuidadorGId = userId;
        this.sservice.crearServicioCarer(serviceData).subscribe({
        next: (response) => {
          this.showSnackBar("Servicio Creado Exitosamente :D !");
          this.dialogRef.close();
          //this.router.navigate([''])

        },
        error:(err) =>{
          this.showSnackBar(err.error.message);
        }
      })}

    }
  }

  controlHasError(control: string, error: string) {
    return this.serviceForm.get(control)?.hasError(error) || false;
  }
  
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  readonly dialogRef = inject(MatDialogRef<ServicioDialogComponent>);
  readonly data = inject<ServiceRequest>(MAT_DIALOG_DATA);
}



