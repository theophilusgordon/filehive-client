import { Component, Input } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResponse } from 'src/app/services/interfaces/auth-response.interface';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent {
  password: string = '';
  confirmPassword: string = '';
  token: string = '';

  faEyeSlash = faEyeSlash;

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

  constructor(private authService: AuthService) {}

  isServerError: boolean = false;

  @Input() serverError: string = '';
  @Input() isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
    this.authService
      .resetPassword({
        password: this.password,
        confirmPassword: this.confirmPassword,
        token: this.token,
      })
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
