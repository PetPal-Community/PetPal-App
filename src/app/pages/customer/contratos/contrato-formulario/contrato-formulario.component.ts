import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { ContratoService } from '../../../../core/services/contrato.service';

@Component({
  selector: 'app-contrato-formulario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatCardModule,
    MatSnackBarModule, RouterLink,CommonModule, MatFormFieldModule,
    MatRadioButton, MatRadioModule
  ],
  templateUrl: './contrato-formulario.component.html',
  styleUrl: './contrato-formulario.component.css'
})
export class ContratoFormularioComponent {
  contratoForm: FormGroup;
  private cf = inject(FormBuilder);
  private route=inject(ActivatedRoute);
  private authService = inject(AuthService);
  private contratoService = inject(ContratoService);
  private snackBar = inject(MatSnackBar);

  serviceId?: number;

  constructor(){
    this.contratoForm = this.cf.group({
      duracionContrato: ['',Validators.required],
      detalles: ['',Validators.required]
    })
  }

  ngOnInit(){
   const servicioId = this.route.snapshot.paramMap.get('servicioId');

    // Verifica que el servicioId no sea null y luego conviértelo a número
    if (servicioId !== null) {
      this.serviceId = +servicioId; // Convierte el string a número
      console.log(this.serviceId);
    } else {
      // Manejo en caso de que no exista el servicioId
      console.error('No se encontró el id del servicio');
  }}


  onSubmit(){
    if(this.contratoForm.valid){
      const user = this.authService.getUser();
      const customerId = user?.id;
      if(customerId && this.serviceId){
        const contratoData = this.contratoForm.value;
        contratoData.usuarioGId = customerId;
        contratoData.servicio = this.serviceId;
        contratoData.estado = "Sin confirmar"
        this.contratoService.crearContrato(contratoData).subscribe({
          next: (r)=>{
            this.showSnackBar("Contrato creado")
          },
          error: (e) =>{
            this.showSnackBar(e.error.message || "error en crear contrato");
          }
        })
      }
    } else {
      this.contratoForm.markAllAsTouched();
      return;
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

}
