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
  ReactiveFormsModule,
} from '@angular/forms';

// type questionBloc = {
//   question: string;
//   options: string[];
// };

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css'],
})
export class NewSurveyComponent implements OnInit {
  // surveyForm = new FormGroup({
  //   title: new FormControl(),
  //   type: new FormControl(),
  //   dateStart: new FormControl(),
  //   dateEnd: new FormControl(),
  //   questionsBloc: new FormGroup({
  //     question: new FormControl(),
  //     options: new FormControl(),
  //   }),
  // });

  // questionsBloc = new FormGroup({
  //   question: new FormControl(),
  //   options: new FormControl(),
  // });

  //Field Variable
  // title: string = '';
  // type: string = '';
  // dateStart: Date = new Date();
  // dateEnd: Date = new Date();
  // questionsBloc: questionBloc[] = [
  //   {
  //     question: '',
  //     options: [''],
  //   },
  // ];
  surveyForm: FormGroup;

  constructor(private repository: SurveyRepository, private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      title: '',
      type: '',
      dateStart: new Date().toISOString().split('T')[0],
      dateEnd: new Date().toISOString().split('T')[0],
      questions: this.fb.array([
        this.fb.group({
          question: '',
          options: this.fb.array(['']),
        }),
      ]),

      // questionsBloc: this.fb.group({
      //   question: '',
      //   options:this.fb.array([""])
      // })
    });

    // question: "",
    // options: this._formBuilder.array([]),
  }

  ngOnInit(): void {}

  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  get options(): FormArray {
    return this.questions.get('options') as FormArray;
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      question: '',
      options: this.fb.array(['']),
    });
  }

  addQuestion(): void {
    this.questions.push(this.newQuestion());

    // this.questionArray.push({ question: '', options: [''] });
    // this.questionsBloc.push({ question: '', options: [''] });

    // this.surveyForm.questionsBloc.push(
    //   this._formBuilder.control({ question: '', options: [''] })
    // );
  }

  addOption(i: number): void {
    // this.questionsBloc[i].options.push('');
  }

  deleteQuestion(i: number): void {
    this.questions.removeAt(i);
    // this.questionsBloc.splice(i, 1);
  }

  deleteOption(i: number, j: number): void {
    // this.questionsBloc[i].options.splice(j, 1);
  }

  onSubmit(): void {
    console.log(this.surveyForm.value);
    // var survey: Survey = {
    //   title: this.title,
    //   type: this.type,
    //   dateStart: this.dateStart,
    //   dateEnd: this.dateEnd,
    //   questionsBloc: this.questionsBloc,
    // };
    // console.log(survey);
  }
}
