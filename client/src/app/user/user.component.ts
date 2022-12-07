import { Component } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

import { User } from '../model/user.model';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  public surveysPerPage = 4;
  public selectedPage = 1;
  public currentUser!: User;
  public searchTitle = '';
  public surveyResult: Survey[] = [];
  submitted = false;
  surveySent = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private repository: SurveyRepository
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user')!);
  }

  logOut(): void {
    this.auth.logOut();

    this.router.navigateByUrl('/');
  }

  // Getters
  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;

    this.surveyResult = this.repository.getSurveys().filter((survey) => {
      return survey.user === this.currentUser.username;
    });

    if (this.searchTitle === '' || !this.searchTitle) {

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

      return this.surveyResult.slice(
        pageIndex,
        pageIndex + this.surveysPerPage
      );
    }
  }

  get today(): Date {
    return new Date();
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

  duplicate(surveyID: string) {
    console.log(surveyID);
    this.submitted = true;
    let duplicatedForm = this.repository.getSurvey(surveyID);

    this.repository.addSurvey(duplicatedForm).subscribe((survey) => {
      this.submitted = false;
      this.surveySent = true;
      this.router.navigateByUrl('/user/main').then(() => {
        window.location.reload();
      });
    });

    this.submitted = false;
    this.surveySent = false;
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
      this.router.navigateByUrl('/user/main').then(() => {
        window.location.reload(); //TODO reload necessary or it goes to results page, see HTML, find more eloquent way?
      });
    } else {
      window.location.reload();
    }
  }
}
