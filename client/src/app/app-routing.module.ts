import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { NewSurveyComponent } from './survey/new-survey/new-survey.component';
import { FillingFormComponent } from './survey/filling-form/filling-form.component';
import { ResultViewComponent } from './survey/result-view/result-view.component';
import { ThankyouPageComponent } from './survey/thankyou-page/thankyou-page.component';
import { AuthGuard } from './user/auth/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: ''}},
  {path: 'about', component: AboutComponent, data: {title: ''}},
  {path: 'contact', component: ContactComponent, data: {title: ''}},
  {path: 'faq', component: FaqComponent, data: {title: ''}},
  {path: 'register', redirectTo: 'user/register', data: {title: ''}},
  {path: 'login', redirectTo: 'user/login', pathMatch: 'full', data: {title: ''}},
  {path: 'user', loadChildren: () => import('./user/user.module').then(module => module.UserModule)},
  {path: 'survey-list', component: SurveyListComponent, data: {title: ''}},
  {path: 'survey-details', component: SurveyDetailsComponent, data: {title: ''}},
  {path: 'survey-completed', component: ThankyouPageComponent, data: {title: ''}},
  {path: 'edit/:id', component: SurveyDetailsComponent, data: {title: ''}},
  {path: 'edit/survey/:id', component: SurveyDetailsComponent, data: {title: ''}, canActivate: [AuthGuard]},
  {path: 'fill/survey/:id', component: FillingFormComponent, data: {title: ''}},
  {path: 'result/:id', component: ResultViewComponent, data:{title: ""}},
  {path: 'new-survey', component: NewSurveyComponent, data: {title: ''}, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
