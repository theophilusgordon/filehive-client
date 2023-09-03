import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEnvelopeSquare,
  faEyeSlash,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResponse } from 'src/app/services/interfaces/auth-response.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstName: string = '';
  lastName: string = '';

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
  faUserAlt = faUserAlt;

  constructor(private authService: AuthService, private router: Router) {}

  isServerError: boolean = false;

  @Input() serverError: string[] = [];
  @Input() isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;

	const userInfo = {
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    firstName: this.firstName,
    lastName: this.lastName,
  };

    this.authService
      .signUp(userInfo)
      .pipe(
        catchError((error) => {
          this.isServerError = true;
          this.serverError = error.error.message;
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
