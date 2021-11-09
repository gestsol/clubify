import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = 'https://message-backend.witservices.io/email/send-email';
  
  constructor(private http: HttpClient) { }
  
  enviarEmail(producto: any): Observable<any> {
    return this.http.post(this.url, producto);
  }
  
}
