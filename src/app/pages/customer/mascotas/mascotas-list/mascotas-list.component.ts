import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MascotaResponse } from '../../../../shared/models/mascota-response.model';
import { PetCardComponent } from '../../../../shared/components/pet-card/pet-card.component';
import { MascotaService } from '../../../../core/services/mascota.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mascotas-list',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  templateUrl: './mascotas-list.component.html',
  styleUrl: './mascotas-list.component.css'
})
export class MascotasListComponent implements OnInit{

  mascotas: MascotaResponse[] =[];

  private mascotaService = inject(MascotaService);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);

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



}

