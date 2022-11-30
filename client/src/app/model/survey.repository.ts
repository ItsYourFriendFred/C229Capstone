import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class SurveyRepository {
  private surveys: Survey[] = [];
  private completedSurveys: Survey[] = [];
  private availableSurveys: Survey[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getSurveys().subscribe((data) => {
      data.forEach(element => {
        element.dateEnd = new Date(element.dateEnd!);
        element.dateStart = new Date(element.dateStart!);
      });

      this.surveys = data;
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      this.completedSurveys = data.filter((survey) => {
        return new Date(survey.dateEnd!).getTime() < today.getTime();
      });
      this.availableSurveys = data.filter((survey) => {
        return new Date(survey.dateEnd!).getTime() >= today.getTime();
      });
    });
  }

  getSurveys(user: string = null!): Survey[] {
    return this.surveys
    .filter(
      (survey) => user == null || user === survey.user
    );
  }

  getSurvey(id: string): Survey {
    return this.surveys.find((survey) => survey._id === id)!;
  }

  getCompletedSurvey(): Survey[] {
    return this.completedSurveys;
  }

  getAvailableSurvey(): Survey[] {
    return this.availableSurveys;
  }

  addSurvey(survey: Survey): Observable<Survey> {
    return this.dataSource.addSurvey(survey);
  }

  saveSurvey(survey: Survey, surveyID: string): Observable<Survey> {
    return this.dataSource.updateSurvey(survey, surveyID);
  }

  deleteSurvey(deletedSurveyID: string): void {
    this.dataSource.deleteSurvey(deletedSurveyID).subscribe((survey) => {
      this.surveys.splice(this.surveys.findIndex((survey) => survey._id === deletedSurveyID), 1);
    })
  }

  answerSurvey(survey: Survey, surveyID: string): Observable<Survey> {
    return this.dataSource.answerSurvey(survey, surveyID);
  }

}
