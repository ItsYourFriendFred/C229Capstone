import { Component } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyModule } from '../survey/survey.module';
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

    return this.repository
      .getSurveys()
      .filter((survey) => {
        return survey.user === this.currentUser.username;
      })
      .slice(pageIndex, pageIndex + this.surveysPerPage);
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

  changePageSize(newSize: number): void {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getSurveys().length / this.surveysPerPage);
  }

  // Uncomment when you actually do need to delete a survey (to keep our test data for experimenting)
  deleteSurvey(id: string): void {
    console.log(id);

    if (confirm('Are you sure?') && id !== undefined) {
      this.repository.deleteSurvey(id);
    } else {
      window.location.reload();
    }
  }
}
