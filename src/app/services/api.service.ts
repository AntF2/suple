import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://web-api-g.onrender.com/videojuegos/';
  private personalUrl = 'http://localhost:3000/personal';

  constructor(private http: HttpClient) {}

  getJuegos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getJuego(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createJuego(juego: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, juego);
  }

  updateJuego(juego: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${juego.id}`, juego);
  }

  deleteJuego(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getPersonal(): Observable<any[]> {
    return this.http.get<any[]>(this.personalUrl);
  }

  getPersonalById(id: string): Observable<any> {
    return this.http.get<any>(`${this.personalUrl}/${id}`);
  }

  createPersonal(personal: any): Observable<any> {
    return this.http.post<any>(this.personalUrl, personal);
  }

  updatePersonal(personal: any): Observable<any> {
    return this.http.put<any>(`${this.personalUrl}/${personal.id}`, personal);
  }

  deletePersonal(id: string): Observable<any> {
    return this.http.delete<any>(`${this.personalUrl}/${id}`);
  }

  login(credentials: any): Observable<any> {
    // Replace with actual login endpoint
    return this.http.post<any>('https://your-auth-api/login', credentials);
  }
}
