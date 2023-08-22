import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../components/login-form/login.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
	private apiUrl = 'http://localhost:5000/auth'
  constructor(private http: HttpClient) {}

  signIn(data: any): Observable<Login> {
	return this.http.post<Login>(`${this.apiUrl}/sign-in`, data)
  }

  signUp() {}

  forgotPassword() {}

  resetPassword() {}
}
