import { Component,inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MascotaResponse } from '../../../../shared/models/mascota-response.model';
import { AuthService } from '../../../../core/services/auth.service';
import { MascotaService } from '../../../../core/services/mascota.service';
import { RegistroMedicoService } from '../../../../core/services/registro-medico.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-registros-form',
  standalone: true,
  imports:  [CommonModule,FormsModule,MatSelectModule, MatInputModule, MatDialogModule, ReactiveFormsModule
    ,MatFormFieldModule, MatButtonModule,MatRadioModule, MatDialogModule, MatSnackBarModule, MatDatepickerModule ],
  templateUrl: './registros-form.component.html',
  styleUrl: './registros-form.component.css'
})
export class RegistrosFormComponent {

  visitaForm: FormGroup;
  private mf = inject(FormBuilder);
  mascotas: MascotaResponse[] = [];

  private authService = inject(AuthService);
  private mascotaService = inject(MascotaService);
  private visitaService = inject(RegistroMedicoService);

  readonly dialogRef = inject(MatDialogRef<RegistrosFormComponent>);

  constructor() {
    this.visitaForm = this.mf.group({
      diagnostico: ['', [Validators.required]],
      fechaVisita: ['', [Validators.required]],
      mascotaId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cargarPets();
  }

  controlHasError(control: string, error: string) {
    return this.visitaForm.get(control)?.hasError(error) || false;
  }

  cargarPets(): void {
    const authData = this.authService.getUser();
    const userId = authData?.id;

    if (userId) {
      this.mascotaService.getPetsbyUserGId(userId).subscribe({
        next: (mascotas) => {
          this.mascotas = mascotas;
          console.log(mascotas);
        },
        error: (error) => {
          console.log("Error en cargar mascotas" + error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.visitaForm.valid) {
      const visitaData = { ...this.visitaForm.value };

      // Formateamos la fecha al formato LocalDate (YYYY-MM-DD)
      visitaData.fechaVisita = this.formatDate(visitaData.fechaVisita);

      this.visitaService.crearVisitaMedica(visitaData).subscribe({
        next: () => {
          this.dialogRef.close();
          window.location.reload();
          console.log("Creado recordatorio");
        },
        error: (e) => {
          console.log("Error en crear visita medica" + e);
        }
      });
    } else {
      this.visitaForm.markAllAsTouched();
      return;
    }
  }

  formatDate(date: string): string {
    // Convertir la fecha al formato yyyy-MM-dd
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0'); // Mes en formato 2 dígitos
    const day = formattedDate.getDate().toString().padStart(2, '0'); // Día en formato 2 dígitos
    return `${year}-${month}-${day}`;
  }
}