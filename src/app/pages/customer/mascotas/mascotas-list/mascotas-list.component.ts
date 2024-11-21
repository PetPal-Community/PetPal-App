import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MascotaResponse } from '../../../../shared/models/mascota-response.model';

import { MascotaService } from '../../../../core/services/mascota.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MascotasFormComponent } from '../mascotas-form/mascotas-form.component';

@Component({
  selector: 'app-mascotas-list',
  standalone: true,
  imports: [CommonModule,FormsModule,MatSelectModule, MatInputModule, MatDialogModule, ReactiveFormsModule
    ,MatFormFieldModule ],
  templateUrl: './mascotas-list.component.html',
  styleUrl: './mascotas-list.component.css'
})
export class MascotasListComponent implements OnInit{

  mascotas: MascotaResponse[] =[];

  private mascotaService = inject(MascotaService);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  

  ngOnInit(): void {
      this.cargarPets();
  }

  cargarPets(): void{
    const authData = this.authService.getUser();
    const userId = authData?.id;

    if(userId){
      this.mascotaService.getPetsbyUserGId(userId).subscribe({
        next: (mascotas) => {
          this.mascotas = mascotas;
          console.log(mascotas)
          this.showSnackBar('Perfil cargado con éxito');
        },
        error: (error) => {

          this.showSnackBar('Error al cargar el perfil');
        }
      })
    }
  }

  // MOstrat mensaje
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  crearMascota():void{
    const dialogRef = this.dialog.open(MascotasFormComponent);
  }

  editarMascota(mascotaId:number): void{
    this.dialog.open(MascotasFormComponent,{
      data: mascotaId
    });
    
  }

  borrarMascota(mascotaId:number): void{
    this.mascotaService.deleteMascota(mascotaId).subscribe({
      next:()=>{
        window.location.reload();
      },
      error:(e)=>{
        console.log("Error en borrar mascota" + e)
      }
    })
  }


}

