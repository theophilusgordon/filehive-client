import { Component, Input } from '@angular/core';
import {
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../services/interfaces/auth-response.interface';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent {
  email: string = '';

  response: AuthResponse = {
    access_token: '',
    id: '',
    role: '',
  };

  faEnvelopeSquare = faEnvelopeSquare;

  constructor(private authService: AuthService) {}

  @Input() emailErrorMessage: string = 'Invalid Email';
  @Input() emailSuccessMessage: string = 'Valid Email';
  @Input() isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;

    this.authService
      .forgotPassword({ email: this.email })
      .subscribe((response) => {
        this.response = response;
      });
  }
}
