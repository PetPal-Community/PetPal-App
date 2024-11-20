import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaypalCaptureResponse, PaypalOrderResponse } from '../../shared/models/paypal-response.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private baseURL = `${environment.baseUrl}/checkout`;

  private http = inject(HttpClient);

  createPaypalOrder(purchaseId: number) {
    let params = new HttpParams();
    params = params.append('invoiceId', purchaseId);
    params = params.append('returnUrl', "http://localhost:4200/customer/verContratos");
    params = params.append('cancelUrl',"http://localhost:4200/customer/verContratos");
    return this.http.post<PaypalOrderResponse>(`${this.baseURL}/create`, null, {
      params: params,
    });
  }

  capturePaypalOrder(orderId: string) {
    return this.http.post<PaypalCaptureResponse>(
      `${this.baseURL}/capture?orderId=${orderId}`,
      null
    );
  }

}
