import { Component, inject } from '@angular/core';
import { ContratosResponse } from '../../../../shared/models/contratos-response.model';
import { AuthService } from '../../../../core/services/auth.service';
import { ContratoService } from '../../../../core/services/contrato.service';
import { CommonModule } from '@angular/common';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { PagoService } from '../../../../core/services/pago.service';
import { PagoResponse } from '../../../../shared/models/pago-response.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contratos-list',
  standalone: true,
  imports: [CommonModule,ApiImgPipe,MatSnackBarModule],
  templateUrl: './contratos-list.component.html',
  styleUrl: './contratos-list.component.css'
})
export class ContratosListCustomerComponent {
  contratos: ContratosResponse[] = [];
  private authService = inject(AuthService);
  private contratoServicio=inject(ContratoService);
  private checkoutServicio = inject(CheckoutService);
  private pagoServicio = inject(PagoService);
  private snackBar=inject(MatSnackBar);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  pago?: PagoResponse;

  ngOnInit(): void{
    this.cargarContratos();
    const token = this.route.snapshot.queryParamMap.get('token');
    const payerId = this.route.snapshot.queryParamMap.get('PayerID');

    if (token && payerId) {
        this.checkoutServicio.capturePaypalOrder(token)
        .subscribe(response => {
          if (response.completed) {
            this.router.navigate(['/customer/verContratos', response.purchaseId]);
          }
        })
    }


  }

  cargarContratos(): void {
    const authData = this.authService.getUser();
    const customerId = authData?.id;

    if(customerId){
      this.contratoServicio.getContratoByCustomerId(customerId).subscribe({
        next: (contrato)=>{
          this.contratos = contrato;
        }
      })
    }

  }

  proceedToCheckout(contratoId: number): void {

    this.pagoServicio.obtenerPagoPorContratoId(contratoId).subscribe({
        next: (pagoObtenido)=>{
          this.pago=pagoObtenido;

          this.checkoutServicio.createPaypalOrder(this.pago.id).subscribe({
            next: (response)=>{
              window.location.href = response.paypalUrl;
            },
            error: (e) =>{
              this.showSnackBar(e.error.message || "error en crear checkout");
            }
          })
        }, error: (e) =>{
          this.showSnackBar(e.error.message || "error en obtener pago por contrato");
        }
    });
    
    
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }


  

}
