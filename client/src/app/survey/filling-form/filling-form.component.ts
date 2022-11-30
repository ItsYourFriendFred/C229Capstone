import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filling-form',
  templateUrl: './filling-form.component.html',
  styleUrls: ['./filling-form.component.css'],
})
export class FillingFormComponent implements OnInit {
  surveyID!: string;
  surveyForm!: FormGroup;
  survey!: Survey;
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

    console.log(JSON.stringify(this.survey));
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
        this.initialisePageWithoutData();
        return;
      }
    }

    this.temporarySurveySave();

    this.surveyForm = new FormGroup({
      title: new FormControl(this.survey.title),
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

  initialisePageWithoutData() {
    console.log(this.surveyID);
    this.surveyForm = new FormGroup({
      title: new FormControl(''),
      questionsBloc: new FormArray([this.initQuestion()]),
    });
    this.addOption(0);
  }

  initQuestion(question: string = '') {
    return new FormGroup({
      question: new FormControl(question),
      options: new FormArray([]),
    });
  }

  initOption(option: string = '') {
    return new FormControl(option);
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

  temporarySurveySave() {
    sessionStorage.setItem('fillingSurvey', JSON.stringify(this.survey));
  }

  retriveTemporarySurveySave() {
    this.survey = JSON.parse(sessionStorage.getItem('fillingSurvey')!);
  }

  registerUserInput(questionNumber: number, optionNumber: number) {
    // this.survey.answerBloc[i].answer[j] =+ 1
  }

  onSubmit(form: any): void {
    this.submitted = true;
    if (form.valid) {
      this.repository
        .answerSurvey(form.value, this.surveyID)
        .subscribe((survey) => {
          this.submitted = false;
          this.router.navigateByUrl('survey-list').then(() => {
            window.location.reload();
          });
        });
    }
  }
}
