import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from './login.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  login: Login = {
    access_token: '',
    userId: '',
	role: ''
  };

  constructor(private authService: AuthService) {}

  @Input() emailErrorMessage: string = 'Invalid Email';
  @Input() emailSuccessMessage: string = 'Valid Email';
  @Input() passwordErrorMessage: string = 'Invalid Password';
  @Input() passwordSuccessMessage: string = 'Valid Password';
  @Input() isSubmitted: boolean = false;

  onSubmit(): void {
    this.isSubmitted = true;
    this.authService.signIn({email: this.email, password: this.password}).subscribe((response) => {
		this.login = response;
		console.log(this.login);
	});

  }
}
