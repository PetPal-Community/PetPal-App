import { Component, Inject, inject } from '@angular/core';
import { PagoService } from '../../../core/services/pago.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContratoService } from '../../../core/services/contrato.service';

interface metodosPagos{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatDialogModule,ReactiveFormsModule, 
    MatDialogTitle, MatDialogActions, MatInputModule,MatSelectModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})


export class PagosComponent {
  pagoForm: FormGroup;
  private pf = inject(FormBuilder);
  private pagoService= inject(PagoService);
  private snackBar = inject(MatSnackBar);
  private contratoService=inject(ContratoService);

  metodosPagos: metodosPagos[] = [
    {value: 'paypal', viewValue: 'PayPal'},
    {value: 'tarjetaCredito', viewValue: 'Tarjeta de Credito'},
    {value: 'tarjetaDebido', viewValue: 'Tarjeta de Debito'},
  ];
  

  readonly dialogRef = inject(MatDialogRef<PagosComponent>);
  readonly contratoId = inject<number>(MAT_DIALOG_DATA);

  constructor(){
    this.pagoForm=this.pf.group({
      "metodoPago": ['',[Validators.required]],
      "valorPago":['',[Validators.required]]
    })
  }

  controlHasError(control: string, error: string) {
    return this.pagoForm.get(control)?.hasError(error) || false;
  }


  crearPago(): void {
    if (this.contratoId) {
      const contratoData = this.pagoForm.value;
      contratoData.contratacionIdd = this.contratoId;
      
      this.pagoService.crearPago(contratoData).subscribe({
        next: (response) => {
          this.showSnackBar("Pago creado correctamente");
          
          // Actualizamos el contrato después de crear el pago
          this.contratoService.actualizarEstadoContrato(this.contratoId, "Aceptado").subscribe({
            next: (updatedContrato) => {
              // this.contrato = updatedContrato; // Actualiza el contrato en el componente
              this.dialogRef.close();
            },
            error: (err) => {
              this.showSnackBar(err.error.message || "Error al actualizar el estado del contrato");
            }
          });
        },
        error: (e) => {
          this.showSnackBar(e.error.message || "Error al crear el pago");
        }
      });
    }
  }
  
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

}
