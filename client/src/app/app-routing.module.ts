import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { NewSurveyComponent } from './survey/new-survey/new-survey.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: ''}},
  {path: 'about', component: AboutComponent, data: {title: ''}},
  {path: 'contact', component: ContactComponent, data: {title: ''}},
  {path: 'faq', component: FaqComponent, data: {title: ''}},
  {path: 'survey-list', component: SurveyListComponent, data: {title: ''}},
  {path: 'survey-details', component: SurveyDetailsComponent, data: {title: ''}},
  {path: 'login', component: LoginComponent, data: {title: ''}},
  {path: 'register', component: RegisterComponent, data: {title: ''}},
  {path: 'new-survey', component: NewSurveyComponent, data: {title: ''}},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
