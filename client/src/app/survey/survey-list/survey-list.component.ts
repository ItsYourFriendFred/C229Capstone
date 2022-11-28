import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';
import { SurveyModule } from '../survey.module';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})
export class SurveyListComponent implements OnInit {
  public surveysPerPage = 4;
  public selectedPage = 1;
  user!: User | null;

  constructor(private repository: SurveyRepository,
    private authService: AuthService) {}

  ngOnInit(): void {}

  // Getters
  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveysPerPage;

    return this.repository
      .getSurveys()
      .slice(pageIndex, pageIndex + this.surveysPerPage);
  }
  
  get today() : Date {
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
    return Math.ceil(
      this.repository.getSurveys().length /
        this.surveysPerPage
    );
  }

  // Uncomment when you actually do need to delete a survey (to keep our test data for experimenting)
  deleteSurvey(id: string): void {
    console.log(id);
    
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deleteSurvey(id);
    }
    else{
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
