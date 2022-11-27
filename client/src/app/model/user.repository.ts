import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";

@Injectable()
export class UserRepository {

    constructor(private dataSource: RestDataSource) {}

    registerUser(user: User): Observable<User> {
        return this.dataSource.registerUser(user);
    }
}