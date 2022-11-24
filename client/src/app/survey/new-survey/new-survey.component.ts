import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyModule } from '../survey.module';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Event } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  Form,
} from '@angular/forms';


@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css'],
})
export class NewSurveyComponent implements OnInit {
  surveyForm!: FormGroup;
  private submitted = false;

  constructor(private repository: SurveyRepository, private fb: FormBuilder) {}

  ngOnInit() {
    this.surveyForm = new FormGroup({
      title: new FormControl(''),
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
    return new FormGroup({
      option: new FormControl('')
    });
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

  onSubmit(form: any) {
    console.log(form.value);
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
