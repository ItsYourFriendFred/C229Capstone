import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyModule } from '../survey.module';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { param } from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css'],
})
export class SurveyDetailsComponent implements OnInit {
  private surveyID?: string;
  public surveyToEdit!: Survey;
  private submitted = false;

  constructor(
    private repository: SurveyRepository,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
  }

  get survey(): Survey {
    this.route.params.subscribe((params) => {
      this.surveyID = params['id'];
      this.surveyToEdit = this.repository.getSurvey(this.surveyID!);
    });
    return this.surveyToEdit!;
  }

  addQuestion(): void {
    this.surveyToEdit!.questionsBloc!.push({ question: '', options: [''] });
  }

  addOption(i: number): void {
    this.surveyToEdit!.questionsBloc![i].options!.push('');
  }

  deleteQuestion(i: number): void {
    this.surveyToEdit!.questionsBloc!.splice(i, 1);
  }
  deleteOption(i: number, j: number): void {
    this.surveyToEdit!.questionsBloc![i].options!.splice(j, 1);
  }

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveSurvey(this.survey).subscribe(survey => {
        this.submitted = false;
      })
    }
  }
}
