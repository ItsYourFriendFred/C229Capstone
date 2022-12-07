import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private repository: SurveyRepository,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  get lastActiveSurvey(): Survey[] {
    let surveyArray = this.repository.getSurveys();
    let lastActiveSurvey = [];
    let surveyIndex = surveyArray.length - 1;
    let counter = 0;

    while (lastActiveSurvey.length != 4 && surveyIndex > 0) {
      let startDate = surveyArray[surveyIndex].dateStart!;
      let endDate = surveyArray[surveyIndex].dateEnd!;
      let today = new Date();
      
      if (today > startDate && today < endDate && surveyArray[surveyIndex].questionsBloc![0] !== undefined) {
        lastActiveSurvey[counter] = surveyArray[surveyIndex];
        counter++
      } 

      surveyIndex--;
    }

    return lastActiveSurvey;
  }
}
