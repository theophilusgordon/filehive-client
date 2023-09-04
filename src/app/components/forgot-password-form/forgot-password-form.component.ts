import { Component, Input } from '@angular/core';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../services/interfaces/auth-response.interface';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent {
  email: string = '';

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

  constructor(private authService: AuthService, private router: Router) {}

  isServerError: boolean = false;
  @Input() serverError: string = '';
  @Input() isSubmitted: boolean = false;
  @Input() checkMail: string = 'Please check your mail to reset your password'

  onSubmit() {
    this.isSubmitted = true;

    this.authService
      .forgotPassword({ email: this.email })
      .pipe(
        catchError((error) => {
          this.isServerError = true;
          this.serverError = error.error.message;
          return throwError(() => error);
        })
      )
      .subscribe((response) => {
        this.response = response;
      });
  }
}
