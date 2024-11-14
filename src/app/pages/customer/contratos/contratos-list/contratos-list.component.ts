import { Component, inject } from '@angular/core';
import { ContratosResponse } from '../../../../shared/models/contratos-response.model';
import { AuthService } from '../../../../core/services/auth.service';
import { ContratoService } from '../../../../core/services/contrato.service';
import { CommonModule } from '@angular/common';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';

@Component({
  selector: 'app-contratos-list',
  standalone: true,
  imports: [CommonModule,ApiImgPipe],
  templateUrl: './contratos-list.component.html',
  styleUrl: './contratos-list.component.css'
})
export class ContratosListCustomerComponent {
  contratos: ContratosResponse[] = [];
  private authService = inject(AuthService);
  private contratoServicio=inject(ContratoService);

  ngOnInit(): void{
    this.cargarContratos();
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

}
