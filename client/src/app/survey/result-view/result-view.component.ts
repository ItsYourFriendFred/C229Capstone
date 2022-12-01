import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css'],
})
export class ResultViewComponent implements OnInit {
  surveyID!: string;
  survey!: Survey;
  results: number[][] = [];
  numberOfParticipants: number = 0;
  submitted = false;

  constructor(
    private repository: SurveyRepository,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.surveyID = this.route.snapshot.params['id'];
    this.route.params.subscribe((param) => {
      this.readFromParam(param['id']);

      if (this.router.getCurrentNavigation()?.trigger === 'popstate') {
        if (Object.keys(param).length !== 0) {
          this.initialisePageWithData();
        }
      }
      this.initialisePageWithData();
    });
  }
  
  get today(): Date {
    return new Date();
  }

  readFromParam(param: string) {
    this.surveyID = param;
    this.survey = this.repository.getSurvey(this.surveyID!);
  }

  initialisePageWithData() {
    if (!this.survey) {
      if (sessionStorage.getItem('fillingSurvey')) {
        this.retriveTemporarySurveySave();
      } else {
        return;
      }
    }

    this.temporarySurveySave();

    this.calculateResults();
  }

  calculateResults() {
    let counterQuestion = 0;

    this.survey.answerBloc?.forEach((question) => {
      let totalAnswers = 0;
      this.results.push([]);
      question.answer?.forEach((answer) => {
        totalAnswers += answer;
      });
      this.numberOfParticipants = totalAnswers;
      question.answer?.forEach((answer) => {
        let optionScore = (answer / totalAnswers) * 100;
        optionScore = Math.round(optionScore * 100) / 100;
        this.results[counterQuestion].push(optionScore);
      });

      counterQuestion++;
    });

    console.log(JSON.stringify(this.results))
  }

  temporarySurveySave() {
    sessionStorage.setItem('fillingSurvey', JSON.stringify(this.survey));
  }

  retriveTemporarySurveySave() {
    this.survey = JSON.parse(sessionStorage.getItem('fillingSurvey')!);
  }
}
