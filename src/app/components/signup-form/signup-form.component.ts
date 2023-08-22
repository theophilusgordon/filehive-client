import { Component, Input } from '@angular/core';

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
    console.log(this.email, this.password);
  }
}
