import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css'],
})
export class SurveyDetailsComponent implements OnInit {
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
  }

  readFromParam(param: string) {
    this.surveyID = param;
    this.survey = this.repository.getSurvey(this.surveyID!);
  }

  initialisePageWithData() {
    if (!this.survey) {
      if (sessionStorage.getItem(this.surveyID)) {
        this.retriveTemporarySurveySave();
      } else {
        this.initialisePageWithoutData();
        return;
      }
    }

    this.temporarySurveySave();

    this.surveyForm = new FormGroup({
      title: new FormControl(this.survey.title),
      type: new FormControl(this.survey.type),
      dateStart: new FormControl(
        new Date(this.survey.dateStart!).toISOString().split('T')[0]
      ),
      dateEnd: new FormControl(
        new Date(this.survey.dateEnd!).toISOString().split('T')[0]
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

  initialisePageWithoutData() {
    console.log(this.surveyID);
    this.surveyForm = new FormGroup({
      title: new FormControl(''),
      type: new FormControl(''),
      dateStart: new FormControl(new Date().toISOString().split('T')[0]),
      dateEnd: new FormControl(new Date().toISOString().split('T')[0]),
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
    const control = <FormArray>(
      this.surveyForm.get(['questionsBloc', i, 'options'])
    );
    control.removeAt(j);
  }

  temporarySurveySave() {
    sessionStorage.setItem(this.surveyID, JSON.stringify(this.survey));
  }

  retriveTemporarySurveySave() {
    this.survey = JSON.parse(sessionStorage.getItem(this.surveyID)!);
  }

  assignAnswerBloc(finishedForm: Survey): Survey {
    let numberOfQuestions: number = finishedForm.questionsBloc
      ? finishedForm.questionsBloc!.length
      : 0;

    // Initialise empty answer bloc
    finishedForm.answerBloc = [];

    for (let i = 0; i < numberOfQuestions; i++) {
      // For each question, add an answer object
      finishedForm.answerBloc.push({ answer: [] });

      let numberOfOptions: number = finishedForm.questionsBloc![i].options
        ? finishedForm.questionsBloc![i].options!.length
        : 0;

      for (let j = 0; j < numberOfOptions; j++) {
        // For each option, add the counter set to 0
        finishedForm.answerBloc![i].answer!.push(0);
      }
    }

    return finishedForm;
  }

  onSubmit(form: any): void {
    this.submitted = true;
    let finishedForm = form.value;
    finishedForm = this.assignAnswerBloc(finishedForm);

    if (form.valid) {
      this.repository
        .saveSurvey(finishedForm, this.surveyID)
        .subscribe((survey) => {
          this.submitted = false;
          this.router.navigateByUrl('/user/main').then(() => {
            window.location.reload();
          });
        });
    } else {
      window.alert('Please make sure to fill each fields.');
    }
  }
}
