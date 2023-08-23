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
    id: '',
    role: '',
  };

  faEnvelopeSquare = faEnvelopeSquare;
  faEyeSlash = faEyeSlash;

  constructor(private authService: AuthService, private router: Router) {}

  @Input() emailErrorMessage: string = 'Invalid Email';
  @Input() emailSuccessMessage: string = 'Valid Email';
  @Input() passwordErrorMessage: string = 'Invalid Password';
  @Input() passwordSuccessMessage: string = 'Valid Password';
  @Input() isSubmitted: boolean = false;

  onSubmit(): void {
    this.isSubmitted = true;
    this.authService
      .signIn({ email: this.email, password: this.password })
      .pipe(
        catchError((error) => {
          for (let errorMessage of error.error.message) {
            if (errorMessage.split(' ')[0] === 'email') {
              this.emailErrorMessage = error.error.message;
            } else {
              this.passwordErrorMessage = error.error.message;
            }
          }
          return throwError(() => error);
        })
      )
      .subscribe((response) => {
        this.response = response;

        if (this.response.access_token !== '') {
          sessionStorage.setItem('token', this.response.access_token);
          sessionStorage.setItem('userId', this.response.id);

          if (this.response.role === 'ADMIN') this.router.navigate(['/admin']);

          if (this.response.role === 'USER') this.router.navigate(['/user']);
        }
      });
  }
}
