import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

const routing = RouterModule.forChild([
  { path: 'login', component: AuthComponent },
  { path: 'main', component: UserComponent, canActivate: [AuthGuard],
  children: [
    { path: '**', redirectTo: 'survey-list' },
  ]},
  { path: '**', redirectTo: 'auth'},
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, ReactiveFormsModule],
  declarations: [RegisterComponent, AuthComponent, UserComponent],
  exports: [RegisterComponent],
  providers: [AuthGuard]
})
export class UserModule {}
