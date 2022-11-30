import { Component, Input, NgModule, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { __assign } from 'tslib';
import { Survey } from 'src/app/model/survey.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css'],
})
export class NewSurveyComponent implements OnInit {
  surveyForm!: FormGroup;
  submitted = false;
  surveySent = false;
  user = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private repository: SurveyRepository,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveyForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl(''),
      dateStart: new FormControl(new Date().toISOString().split('T')[0]),
      dateEnd: new FormControl(new Date().toISOString().split('T')[0]),
      questionsBloc: new FormArray([this.initQuestion()]),
    });
  }

  initQuestion() {
    return new FormGroup({
      question: new FormControl(),
      options: new FormArray([this.initOption()]),
    });
  }

  initOption() {
    return new FormControl('');
  }

  addQuestion() {
    const control = <FormArray>this.surveyForm.get('questionsBloc');
    control.push(this.initQuestion());
  }

  addOption(j: number) {
    console.log(j);
    const control = <FormArray>(
      this.surveyForm.get(['questionsBloc', j, 'options'])
    );
    control.push(this.initOption());
  }

  getQuestions(form: any) {
    return form.controls.questionsBloc.controls;
  }

  getOptions(form: any) {
    return form.controls.options.controls;
  }

  removeQuestion(i: number) {
    const control = <FormArray>this.surveyForm.get('questionsBloc');
    control.removeAt(i);
  }

  removeOption(i: number, j: number) {
    console.log(j);
    const control = <FormArray>(
      this.surveyForm.get(['questionsBloc', i, 'options'])
    );
    control.removeAt(j);
  }

  assignAnswerBloc(finishedForm: Survey): Survey {
    let answerCounter = 0;
    let numberOfQuestions: number = finishedForm.questionsBloc
      ? finishedForm.questionsBloc!.length
      : 0;
    finishedForm.answerBloc = []


    for (let i = 0; i < numberOfQuestions; i++) {
      finishedForm.answerBloc.push({answer: []});
      let numberOfOptions: number = finishedForm.questionsBloc![i].options
        ? finishedForm.questionsBloc![i].options!.length
        : 0;

      for (let j = 0; j < numberOfOptions; j++) {        
          finishedForm.answerBloc![i].answer!.push(0)
      }
    }

    return finishedForm;
  }

  onSubmit(form: FormGroup): void {
    let finishedForm = form.value;
    finishedForm.author = this.user.DisplayName;
    finishedForm.user = this.user.username;
    finishedForm = this.assignAnswerBloc(finishedForm);

    this.submitted = true;
    console.log(form.valid);
    if (form.valid) {
      this.repository.addSurvey(finishedForm).subscribe((survey) => {
        this.submitted = false;
        this.surveySent = true;
        this.router.navigateByUrl('/user/main').then(() => {
          window.location.reload();
        });
      });
    }
  }
}
