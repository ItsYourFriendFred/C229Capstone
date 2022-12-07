import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  public surveysPerPage = 4;
  public selectedPage = 1;
  public searchTitle = '';
  public surveyResult: Survey[] = [];
  user!: User | null;

  constructor(
    private repository: SurveyRepository,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  // Getters
  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
    console.log(this.repository.getSurveys());
    // .find({title: searchTitle})

    if (this.searchTitle === '' || !this.searchTitle) {
      return this.repository
        .getSurveys()
        .slice(pageIndex, pageIndex + this.surveysPerPage);
    } else {
      return this.repository
        .getSurveys()
        .slice(pageIndex, pageIndex + this.surveysPerPage);
    }
  }

  get today(): Date {
    return new Date();
  }

  get completedSurvey(): Survey[] {
    return this.repository.getCompletedSurvey();
  }

  get availableSurvey(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;
    console.log(
      this.repository.getSurveys().find((survey) => {
        return survey.title!.includes(this.searchTitle);
      })
    );

    if (this.searchTitle === '' || !this.searchTitle) {
      this.surveyResult = this.repository.getAvailableSurvey();

      return this.surveyResult.slice(
        pageIndex,
        pageIndex + this.surveysPerPage
      );
    } else {
      this.surveyResult = [];
      this.repository.getAvailableSurvey().find((survey) => {
        if (survey.title!.toLowerCase().includes(this.searchTitle)) {
          this.surveyResult.push(survey);
        }
      });

      return this.surveyResult.slice(pageIndex, pageIndex + this.surveysPerPage);
    }
  }

  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
  }

  search(e: any) {
    this.searchTitle = e.target.value.toLowerCase();
    this.selectedPage = 1;
  }

  get pageCount(): number {
    return Math.ceil(this.surveyResult.length / this.surveysPerPage);
  }

  // Uncomment when you actually do need to delete a survey (to keep our test data for experimenting)
  deleteSurvey(id: string): void {
    if (confirm('Are you sure?') && id !== undefined) {
      this.repository.deleteSurvey(id);
    } else {
      window.location.reload();
    }
  }

  isLoggedIn(): boolean {
    const result = this.authService.authenticated;
    if (result) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    return result;
  }
}
