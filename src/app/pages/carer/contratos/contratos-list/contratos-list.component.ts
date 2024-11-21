import { Component, Inject, inject, OnInit } from '@angular/core';
import { ContratosResponse } from '../../../../shared/models/contratos-response.model';
import { AuthService } from '../../../../core/services/auth.service';
import { ContratoService } from '../../../../core/services/contrato.service';
import { CommonModule } from '@angular/common';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { MatDialog } from '@angular/material/dialog';
import { PagosComponent } from '../../pagos/pagos.component';

@Component({
  selector: 'app-contratos-list',
  standalone: true,
  imports: [CommonModule,ApiImgPipe],
  templateUrl: './contratos-list.component.html',
  styleUrl: './contratos-list.component.css'
})
export class ContratosListComponent implements OnInit {

  contratos: ContratosResponse[] = [];

  private authService = inject(AuthService);
  private contratoService = inject(ContratoService);
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.cargarContratos();
  }

  cargarContratos(): void {
    const authData = this.authService.getUser();
    const carerId = authData?.id;
    if (carerId) {
      this.contratoService.getContratoByCarerId(carerId).subscribe({
        next: (contrato) => {
          this.contratos = contrato;
          console.log(this.contratos);
        }

      })
    }
  }

  crearPago(contratoId:number): void{
    this.dialog.open(PagosComponent, {data: contratoId})
  }

  rechazar(contratoId:number): void{
    this.contratoService.actualizarEstadoContrato(contratoId,"Anulado").subscribe();
  }

  iniciarContrato(contratoId:number): void{
    this.contratoService.actualizarEstadoContrato(contratoId,"En proceso").subscribe();
    window.location.reload()
  }

  finContrato(contratoId:number): void{
    this.contratoService.actualizarEstadoContrato(contratoId,"Finalizado").subscribe();
    window.location.reload()
  }
  
}
