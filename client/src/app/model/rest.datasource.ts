import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const Protocol = 'http';
const Port = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    authToken!: string;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };

    constructor(private http: HttpClient, private jwtService: JwtHelperService) {
        this.baseUrl = `${Protocol}://${location.hostname}:${Port}/`;
    }

    getSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.baseUrl + 'api/survey-list');
    }

    private loadToken(): void {
        const token = localStorage.getItem('id_token');
        this.authToken = token!;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }

    addSurvey(survey: Survey): Observable<Survey> {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(this.baseUrl + 'api/surveys/add', survey);
    }

    updateSurvey(survey: Survey, surveyID: string): Observable<Survey> {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(`${this.baseUrl}api/surveys/edit/${surveyID}`, survey);
    }

}