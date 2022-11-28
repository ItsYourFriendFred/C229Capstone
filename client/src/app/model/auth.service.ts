import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { RestDataSource } from './rest.datasource';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService{
    user!: User;

    constructor(private dataSource: RestDataSource){
        this.user = new User();
    }

    authenticate(user: User): Observable<any> {
        return this.dataSource.authenticate(user);
    }

    storeUserData(token: any, user: User): void {
        this.dataSource.storeUserData(token, user);
    }

    get authenticated(): boolean {
        return this.dataSource.loggedIn();
    }

    logOut(): Observable<any> {
        return this.dataSource.logOut();
    }
}