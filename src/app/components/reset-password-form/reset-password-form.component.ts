import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent {
  password: string = '';
  confirmPassword: string = '';

  @Input() passwordErrorMessage: string = 'Invalid Password';
  @Input() passwordSuccessMessage: string = 'Valid Password';
  @Input() confirmPasswordErrorMessage: string = 'Invalid Password';
  @Input() confirmPasswordSuccessMessage: string = 'Valid Password';
  @Input() isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.password);
  }
}
