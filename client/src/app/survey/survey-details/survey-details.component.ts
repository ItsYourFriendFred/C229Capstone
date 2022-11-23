import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyModule } from '../survey.module';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { param } from 'jquery';
@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css'],
})
export class SurveyDetailsComponent implements OnInit {
  private surveyID: string;

  constructor(
    private repository: SurveyRepository,
    private route: ActivatedRoute
  ) {
    this.surveyID = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.surveyID = params['id'];
    });
  }

  get survey(): Survey {
    console.log(this.surveyID);
    return this.repository.getSurvey(this.surveyID);
  }
}
