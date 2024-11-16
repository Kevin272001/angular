import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) {}

  loginConNest(credenciales: any): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/todos`);
  }

  registroConNest(datos: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/register`, datos);
  }
}
