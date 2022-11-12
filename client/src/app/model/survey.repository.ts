import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ArticleRepository {
  private surveys: Survey[] = [];
//   private completedSurveys: Survey[];
//   private availableSurveys: Survey[];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
    //   this.completedSurveys = data;
    //   this.availableSurveys = data;
    });
  }
}
