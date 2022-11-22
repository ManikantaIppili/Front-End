import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { PaymentModel } from "./payment/payment.model";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){ }
  purl:string='http://localhost:8080/online/api';

  addpayment(payment:PaymentModel):Observable<PaymentModel>{

  return this.http.post<PaymentModel>(this.purl,payment);
 
   }
   getPayment():Observable<PaymentModel>{
    return this.http.get<PaymentModel>(this.purl);
   }
}


 



