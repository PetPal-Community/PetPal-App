import { Component, inject } from '@angular/core';
import { PagoService } from '../../../core/services/pago.service';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {

  private pagoService= inject(PagoService);
  

}
