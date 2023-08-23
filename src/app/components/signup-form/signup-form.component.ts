import { Component, Input } from '@angular/core';
import {
  faEnvelopeSquare,
  faEyeSlash,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResponse } from 'src/app/services/interfaces/auth-response.interface';
import { SignUp } from 'src/app/services/interfaces/signup.interface';

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
    id: '',
    role: '',
  };

  faEnvelopeSquare = faEnvelopeSquare;
  faEyeSlash = faEyeSlash;
  faUserAlt = faUserAlt;

  constructor(private authService: AuthService) {}

  @Input() emailErrorMessage: string = 'Invalid Email';
  @Input() emailSuccessMessage: string = 'Valid Email';
  @Input() firstNameErrorMessage: string = 'Invalid First Name';
  @Input() firstNameSuccessMessage: string = 'Valid First Name';
  @Input() lastNameErrorMessage: string = 'Invalid Last Name';
  @Input() lastNameSuccessMessage: string = 'Valid Last Name';
  @Input() passwordErrorMessage: string = 'Invalid Password';
  @Input() passwordSuccessMessage: string = 'Valid Password';
  @Input() confirmPasswordErrorMessage: string = 'Invalid Password';
  @Input() confirmPasswordSuccessMessage: string = 'Valid Password';
  @Input() isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;

    this.authService
      .signUp({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        firstName: this.firstName,
        lastName: this.lastName,
      })
      .subscribe((response) => {
        this.response = response;
      });
  }
}
