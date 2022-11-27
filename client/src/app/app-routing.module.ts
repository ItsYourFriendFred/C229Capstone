import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { NewSurveyComponent } from './survey/new-survey/new-survey.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: ''}},
  {path: 'about', component: AboutComponent, data: {title: ''}},
  {path: 'contact', component: ContactComponent, data: {title: ''}},
  {path: 'faq', component: FaqComponent, data: {title: ''}},
  {path: 'register', component: RegisterComponent, data: {title: ''}},
  {path: 'login', redirectTo: '/user/login', pathMatch: 'full', data: {title: ''}},
  

  {path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule)},
  {path: 'survey-list', component: SurveyListComponent, data: {title: ''}},
  {path: 'survey-details', component: SurveyDetailsComponent, data: {title: ''}},
  {path: 'edit/:id', component: SurveyDetailsComponent, data: {title: ''}},
  {path: 'new-survey', component: NewSurveyComponent, data: {title: ''}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
