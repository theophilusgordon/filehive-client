import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from './interfaces/auth-response.interface';
import { HttpClient } from '@angular/common/http';
import { SignIn } from './interfaces/signin.interface';
import { SignUp } from './interfaces/signup.interface';
import { ForgotPassword } from './interfaces/forgot-password.interface';
import { ResetPassword } from './interfaces/reset-password.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/auth';
  constructor(private http: HttpClient) {}

  signIn(data: SignIn): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/sign-in`, data);
  }

  signUp(data: SignUp): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/sign-up`, data);
  }

  forgotPassword(data: ForgotPassword): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/forgot-password`, data);
  }

  resetPassword(data: ResetPassword): Observable<AuthResponse> {
    return this.http.patch<AuthResponse>(`${this.apiUrl}/reset-password`, data);
  }
}
