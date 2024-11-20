import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { ContratoService } from '../../../../core/services/contrato.service';
import { ContratosReport } from '../../../../shared/models/contratos-report.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {

  private AuthService = inject(AuthService);
  private contratoService = inject(ContratoService);
  reporte: ContratosReport | null = null;
  error: string | null = null;
  felicitacionVisible: boolean = false;

  mes: number = new Date().getMonth() + 1;  // Valor inicial (mes actual)
  anio: number = new Date().getFullYear();  // Valor inicial (año actual)

  cargarReporte(): void{
    const authData = this.AuthService.getUser();  // Obtienes los datos del usuario autenticado
    const carerId = authData?.id;  // Asegúrate de que el ID esté disponible

    if (carerId) {
      // Llamas al servicio para obtener el reporte
      this.contratoService.getContractReportByMonth(carerId, this.mes, this.anio).subscribe({
        next: (data) => {
          this.reporte = data;
          this.felicitacionVisible = true;
          setTimeout(() => {
            this.felicitacionVisible = false;
          }, 3000);  // Asignas los datos obtenidos al reporte
        },
        error: (err) => {
          this.error = 'Error al obtener el reporte: ' + err.message;  // Manejas el error si ocurre
        }
      });
    } else {
      this.error = 'No se pudo obtener el ID del cuidador';
    }
  }

}
