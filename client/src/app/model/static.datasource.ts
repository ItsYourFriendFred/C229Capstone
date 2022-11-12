import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private surveys: Survey[] = [
    new Survey(
      1,
      'Why do people love React',
      'Benjamin Lefebvre',
      new Date(),
      new Date(),
      [{
        question: 'Why...?',
        options: ["Option 1", "Option 2", "Option 3"]
      },
        {
        question: 'How...?',
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
      }],
      []
    ),
    new Survey(
      2,
      'Habits of Canadians',
      'Mathis Boogie',
      new Date(),
      new Date(),
      [{
        question: 'What type...?',
        options: ["Option 1", "Option 2"]
      },
        {
        question: 'Yes or No...?',
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
      }],
      []
    ),
    new Survey(
      3,
      'What is the most popular...',
      'Bob Desjardins',
      new Date(),
      new Date(),
      [{
        question: 'How...?',
        options: ["Option 1", "Option 2", "Option 3"]
      },
        {
        question: 'How...?',
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
      }],
      []
    ),
    new Survey(
      4,
      'huefhwbfil gregjkwnl a',
      'Haaaaaaaaaa',
      new Date(),
      new Date(),
      [{
        question: 'Why...?',
        options: ["Option 1", "Option 2", "Option 3"]
      },
        {
        question: 'How...?',
        options: ["Option 1", "Option 2", "Option 3", "Option 4"]
      }],
      []
    ),
    
  ];

  getSurveys(): Observable<Survey[]> {
    return from([this.surveys]);
  }
}
