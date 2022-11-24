import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { SurveyModule } from '../survey.module';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Event, Params, Router } from '@angular/router';
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
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css'],
})
export class SurveyDetailsComponent implements OnInit {
  surveyID!: string;
  surveyForm!: FormGroup;
  survey!: Survey;

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
          this.initialisePage();
        }
      }
      this.initialisePage();
    });
  }

  readFromParam(param: string) {
    this.surveyID = param;
    this.survey = this.repository.getSurvey(this.surveyID!);
  }

  initialisePage() {
    this.surveyForm = new FormGroup({
      title: new FormControl(this.survey.title ? this.survey.title! : ''),
      type: new FormControl(this.survey.type ? this.survey.type! : ''),
      dateStart: new FormControl(
        new Date(this.survey.dateStart ? this.survey.dateStart! : '')
          .toISOString()
          .split('T')[0]
      ),
      dateEnd: new FormControl(
        new Date(this.survey.dateEnd ? this.survey.dateEnd! : '')
          .toISOString()
          .split('T')[0]
      ),
      questionsBloc: new FormArray([]),
    });

    for (let i = 0; i < this.survey.questionsBloc!.length; i++) {
      this.addQuestion(this.survey.questionsBloc![i].question);
      this.survey.questionsBloc![i].options?.forEach((option) => {
        this.addOption(i, option);
      });
    }
    if (this.survey._id) {
      sessionStorage.setItem(
        this.survey._id!,
        JSON.stringify(this.surveyForm.value)
      );
    }
  }

  initQuestion(question: string = '') {
    return new FormGroup({
      question: new FormControl(question),
      options: new FormArray([]),
    });
  }

  initOption(option: string = '') {
    return new FormGroup({
      option: new FormControl(option),
    });
  }

  addQuestion(question: string = '') {
    const control = <FormArray>this.surveyForm.get('questionsBloc');
    control.push(this.initQuestion(question));
  }

  addOption(j: number, option: string = '') {
    console.log(j);
    const control = <FormArray>(
      this.surveyForm.get(['questionsBloc', j, 'options'])
    );
    control.push(this.initOption(option));
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
}
