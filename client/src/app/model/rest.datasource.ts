import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Survey } from './survey.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { User } from './user.model';

const Protocol = 'http';
const Port = 3500;

@Injectable()
export class RestDataSource {
    user!: User | null;
    baseUrl: string;
    authToken!: string | null;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        })
    };

    constructor(private http: HttpClient, private jwtService: JwtHelperService) {
        this.user = new User();
        this.baseUrl = `${Protocol}://${location.hostname}:${Port}/`;
    }

    getSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.baseUrl + 'api/survey-list');
    }

    authenticate(user: User): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'api/login', user, this.httpOptions);
    }

    storeUserData(token: any, user: User): void {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    logOut(): Observable<any> {
        this.authToken = null;
        this.user = null;
        localStorage.clear();

        return this.http.get<any>(this.baseUrl + 'api/logout', this.httpOptions);
    }

    loggedIn(): boolean {
        return !this.jwtService.isTokenExpired(this.authToken!);
    }

    private loadToken(): void {
        const token = localStorage.getItem('id_token');
        this.authToken = token!;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }

    addSurvey(survey: Survey): Observable<Survey> {
        this.loadToken();
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(this.baseUrl + 'api/surveys/add', survey, this.httpOptions);
    }

    updateSurvey(survey: Survey, surveyID: string): Observable<Survey> {
        this.loadToken();
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(`${this.baseUrl}api/surveys/edit/${surveyID}`, survey, this.httpOptions);
    }

    deleteSurvey(surveyID: string): Observable<Survey> {
        this.loadToken();
        return this.http.get<Survey>(`${this.baseUrl}api/surveys/delete/${surveyID}`, this.httpOptions);
    }

    registerUser(user: User): Observable<User> {
        console.log(JSON.stringify(user));
        return this.http.post<User>(this.baseUrl + 'api/register', user);
    }

}