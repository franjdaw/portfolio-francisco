import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/api/contact.php';

  constructor(private http: HttpClient) {}

  sendForm(data: ContactFormData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
