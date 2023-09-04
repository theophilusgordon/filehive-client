import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { FileCardComponent } from './components/file-card/file-card.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FileCardsComponent } from './components/file-cards/file-cards.component';
import { FileCardHeaderComponent } from './components/file-card-header/file-card-header.component';
import { AddFileModalComponent } from './components/add-file-modal/add-file-modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DeleteFileModalComponent } from './components/delete-file-modal/delete-file-modal.component';
import { ShareFileModalComponent } from './components/share-file-modal/share-file-modal.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FileSizePipe } from './pipes/file-size.pipe';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent },
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
    FileCardComponent,
    SidePanelComponent,
    HeaderComponent,
    FileCardsComponent,
    FileCardHeaderComponent,
    AddFileModalComponent,
    DashboardComponent,
    DeleteFileModalComponent,
    ShareFileModalComponent,
    PageNotFoundComponent,
    FileSizePipe,
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
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
