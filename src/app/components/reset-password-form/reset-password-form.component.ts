import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthResponse } from 'src/app/services/interfaces/auth-response.interface';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss'],
})
export class ResetPasswordFormComponent implements OnInit {
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

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
	private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.token = params.get('token')!;
    });
  }

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
		this.router.navigate(['/'])
      });
  }
}
