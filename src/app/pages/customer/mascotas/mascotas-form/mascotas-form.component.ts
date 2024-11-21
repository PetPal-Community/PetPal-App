
import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { MascotaResponse } from '../../../../shared/models/mascota-response.model';

import { MascotaService } from '../../../../core/services/mascota.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';


interface mascotas{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mascotas-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatSelectModule, MatInputModule, MatDialogModule, ReactiveFormsModule
    ,MatFormFieldModule, MatButtonModule,MatRadioModule, MatDialogModule, MatSnackBarModule ],
  templateUrl: './mascotas-form.component.html',
  styleUrl: './mascotas-form.component.css'
})
export class MascotasFormComponent {
  mascotaForm: FormGroup;
  private mf = inject(FormBuilder);
  private authService = inject(AuthService);
  private mascotaService = inject(MascotaService);
  private snackBar = inject(MatSnackBar);

  readonly dialogRef = inject(MatDialogRef<MascotasFormComponent>);
  readonly data = inject<number>(MAT_DIALOG_DATA);
  especies: mascotas[] = [
    {value: 'perro', viewValue: 'Perro'},
    {value: 'gato', viewValue: 'Gato'},
    {value: 'hamster', viewValue: 'Hamster'},
    {value: 'conejo', viewValue: 'Conejo'},
    {value: 'loro', viewValue: 'Loro'},
  ];
  id?: number;
  constructor(){
    this.mascotaForm = this.mf.group({
      raza: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      especie: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.mascotaForm.valid) {
      const user = this.authService.getUser();
      const carerId = user?.id;

      if (carerId) {
        const mascotaData = this.mascotaForm.value;
        mascotaData.usuarioGId = carerId;
        console.log('Datos enviados:', mascotaData);
        const request: Observable<any> = this.id
          ? this.mascotaService.actualizarMascota(this.id, mascotaData)
          : this.mascotaService.crearMascota(mascotaData);

        request.subscribe({
          next: () => {
            this.showSnackBar("Servicio guardado exitosamente");
            this.dialogRef.close();
            window.location.reload();
          },
          error: (err) => {
            this.showSnackBar(err.error.message || "Error al guardar el servicio");
          },
        });

      }

    } else {
      this.mascotaForm.markAllAsTouched();
      return;
    }
  }

  controlHasError(control: string, error: string) {
    return this.mascotaForm.get(control)?.hasError(error) || false;
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }
}
