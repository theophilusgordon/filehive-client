import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthPanelComponent } from './components/auth-panel/auth-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FileCardComponent } from './components/file-card/file-card.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FileCardsComponent } from './components/file-cards/file-cards.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    AuthPanelComponent,
    SignupFormComponent,
    SignupComponent,
    ForgotPasswordFormComponent,
    ForgotPasswordComponent,
    ResetPasswordFormComponent,
    ResetPasswordComponent,
    UserComponent,
    AdminComponent,
    FileCardComponent,
    SidePanelComponent,
    HeaderComponent,
    FileCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
