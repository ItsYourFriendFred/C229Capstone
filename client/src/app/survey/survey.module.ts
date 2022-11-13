import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SurveyListComponent, SurveyDetailsComponent],
  exports: [SurveyListComponent, SurveyDetailsComponent],
})
export class SurveyModule {}
