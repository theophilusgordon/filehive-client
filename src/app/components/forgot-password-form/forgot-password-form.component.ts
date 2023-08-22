import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent {
  email: string = '';

  @Input() emailErrorMessage: string = 'Invalid Email';
  @Input() emailSuccessMessage: string = 'Valid Email';
  @Input() isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.email);
  }
}
