import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css'],
})
export class NewSurveyComponent implements OnInit {
  private submitted = false;

  constructor(private repository: SurveyRepository) {}

  ngOnInit(): void {}

  private surveyToAdd?: Survey = {
    title: '',
    type: '',
    dateEnd: new Date(),
    dateStart: new Date(),
    questionsBloc: [
      {
        question: '',
        options: [''],
      },
    ],
  };

  get survey(): Survey {
    return this.surveyToAdd!;
  }

  addQuestion(): void {
    this.surveyToAdd!.questionsBloc!.push({ question: '', options: [''] });
  }

  addOption(i: number): void {
    this.surveyToAdd!.questionsBloc![i].options!.push('');
  }

  deleteQuestion(i: number): void {
    this.surveyToAdd!.questionsBloc!.splice(i, 1);
  }
  
  deleteOption(i: number, j: number): void {
    this.surveyToAdd!.questionsBloc![i].options!.splice(j, 1);
  }

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      this.repository.addSurvey(this.survey).subscribe(survey => {
        this.submitted = false;
      })
    }
  }
}
