import { Component, Inject, inject, OnInit } from '@angular/core';
import { ContratosResponse } from '../../../../shared/models/contratos-response.model';
import { AuthService } from '../../../../core/services/auth.service';
import { ContratoService } from '../../../../core/services/contrato.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contratos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contratos-list.component.html',
  styleUrl: './contratos-list.component.css'
})
export class ContratosListComponent implements OnInit {

  contratos: ContratosResponse[] = [];

  private authService = inject(AuthService);
  private contratoService = inject(ContratoService);


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
}
