import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { CounterDirective } from './counter.directive';
import { ModelModule } from '../model/model.module';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { RouterModule } from '@angular/router';
import { FillingFormComponent } from './filling-form/filling-form.component';
import { ResultViewComponent } from './result-view/result-view.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule, ReactiveFormsModule],
  declarations: [SurveyListComponent, SurveyDetailsComponent, CounterDirective, NewSurveyComponent, FillingFormComponent, ResultViewComponent],
  exports: [SurveyListComponent, SurveyDetailsComponent, CounterDirective],
})
export class SurveyModule {}