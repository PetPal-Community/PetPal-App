import { Component, inject } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoService } from '../../../../core/services/contrato.service';
import { ContratosResponse } from '../../../../shared/models/contratos-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagoService } from '../../../../core/services/pago.service';
import { PagoResponse } from '../../../../shared/models/pago-response.model';

@Component({
  selector: 'app-confirmacion-compra',
  standalone: true,
  imports: [],
  templateUrl: './confirmacion-compra.component.html',
  styleUrl: './confirmacion-compra.component.css'
})
export class ConfirmacionCompraComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pagoService = inject(PagoService);
  pagoId?: number;
  pago: PagoResponse = {} as PagoResponse;
  private snackBar = inject(MatSnackBar);
  fechaFormateada: string = ''; 

  ngOnInit(): void {
    const purchaseIdParam = this.route.snapshot.paramMap.get('purchaseId');
    console.log(purchaseIdParam)
    this.pagoId =  Number(purchaseIdParam);
    this.cargarContrato(this.pagoId);
    
      
    
  }

  cargarContrato(pagoid: number): void{
    this.pagoService.obtenerPagoPorPagoId(pagoid).subscribe({
      next: (pago: PagoResponse) =>{
        this.pago = pago;
        const fechaOriginal = new Date(pago.fechaPagoPagado); // Convierte la cadena a Date
        this.fechaFormateada = fechaOriginal.toLocaleString('es-ES', {
        dateStyle: 'long',
        timeStyle: 'short',
      });
      }, error: (err) => {
        this.showSnackBar('Error al cargar el contrato');
      }
    })
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  volverContratos(): void{
    this.router.navigate(['customer/verContratos'])
  }

}
