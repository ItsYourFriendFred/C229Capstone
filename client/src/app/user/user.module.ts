import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CounterDirective } from './counter.directive';
import { SurveyDetailsComponent } from '../survey/survey-details/survey-details.component';

const routing = RouterModule.forChild([
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: AuthComponent },
  { path: 'main', component: UserComponent, canActivate: [AuthGuard],
    children: [
      { path: '**', redirectTo: '' }],
  },
  { path: '**', redirectTo: 'home' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, ReactiveFormsModule],
  declarations: [
    RegisterComponent,
    AuthComponent,
    UserComponent,
    CounterDirective,
  ],
  exports: [CounterDirective],
  providers: [AuthGuard, RegisterComponent],
})
export class UserModule {}
