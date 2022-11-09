import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-create.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';

const routes: Routes = [
  {path: "home", component: HomeComponent, data: {title: ""}},
  {path: "about", component: AboutComponent, data: {title: ""}},
  {path: "contact", component: ContactComponent, data: {title: ""}},
  {path: "faq", component: FaqComponent, data: {title: ""}},
  {path: "survey-list", component: SurveyListComponent, data: {title: ""}},
  {path: "survey-details", component: SurveyDetailsComponent, data: {title: ""}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
