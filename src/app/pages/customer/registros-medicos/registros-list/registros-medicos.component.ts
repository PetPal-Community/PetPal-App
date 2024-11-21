import { Component, inject, OnInit } from '@angular/core';
import { RegistroMedicoService } from '../../../../core/services/registro-medico.service';
import { AuthService } from '../../../../core/services/auth.service';
import { VisitaResponse } from '../../../../shared/models/visitaMedica-response.model';
import { CommonModule, DatePipe } from '@angular/common';
import { RegistrosFormComponent } from '../registros-form/registros-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-registros-medicos',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './registros-medicos.component.html',
  styleUrl: './registros-medicos.component.css'
})
export class RegistrosMedicosComponent implements OnInit {
  private registroService = inject(RegistroMedicoService);
  private authService = inject(AuthService);
  readonly dialog = inject(MatDialog);
  
  registros: VisitaResponse[] =[];
  fechaFormat?:string;

  ngOnInit(): void{
    this.cargarRegistros();
  }

  cargarRegistros(): void{
    
    const authData = this.authService.getUser();
    const userId = authData?.id;
    

    if(userId){
      this.registroService.getVisitaByUserId(userId).subscribe({
        next: (registros) => {
          this.registros = registros;
          
          
        },
        error: (error) => {

          console.log("Error en cagar mascota" + error);
        }
      })
    }
  }

  verDocumentos(): void{

  }

  verTratamientos(): void{
    
  }

  crearRegistro():void{
    const dialogRef = this.dialog.open(RegistrosFormComponent);
  }

  borrar(registroId:number): void{
    this.registroService.deleteVisitaMedica(registroId).subscribe({
      next:()=>{
        console.log("borrado exitoso");
        window.location.reload();
      },
      error:(e)=>{
        console.log("error en borrar: "+e)
      }
    });
  }
}
