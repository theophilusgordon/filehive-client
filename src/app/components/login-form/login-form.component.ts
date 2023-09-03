import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResponse } from '../../services/interfaces/auth-response.interface';
import {
  faEnvelopeSquare,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  response: AuthResponse = {
    access_token: '',
    user: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      otherNames: '',
      profilePhoto: '',
      role: '',
    },
  };

  faEnvelopeSquare = faEnvelopeSquare;
  faEyeSlash = faEyeSlash;

  @Input() emailErrorMessage: string = 'Invalid Email';
  @Input() emailSuccessMessage: string = 'Valid Email';
  @Input() passwordErrorMessage: string = 'Invalid Password';
  @Input() passwordSuccessMessage: string = 'Valid Password';
  @Input() isSubmitted: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.isSubmitted = true;
    this.authService
      .signIn({ email: this.email, password: this.password })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe((response) => {
        this.response = response;

        sessionStorage.setItem('token', response.access_token);
        sessionStorage.setItem('user', JSON.stringify(response.user));

        this.router.navigate(['/dashboard']);
      });
  }
}
