import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyModule } from '../survey.module';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  public surveyPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: SurveyRepository) {}

  ngOnInit(): void {}

  // Getters
  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveyPerPage;

    return this.repository
      .getSurveys()
      .slice(pageIndex, pageIndex + this.surveyPerPage);
  }


  get completedSurvey(): Survey[] {
    return this.repository.getCompletedSurvey();
  }

  get availableSurvey(): Survey[] {
    return this.repository.getAvailableSurvey();
  }

  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void {
    this.surveyPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(
      this.repository.getSurveys().length /
        this.surveyPerPage
    );
  }
}
