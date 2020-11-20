import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }

    login(username: string, password: string) : Observable<any> {
        const userData = {
            username: username, 
            password: password
        }
        return this.http.post<any>('/api/users/authenticate', userData, this.httpOptions).pipe(
            catchError(error => {return of(false)})
        );
    }

    isAuth() : boolean {
        const user = sessionStorage.getItem('user');
        console.log(user);
        if (user) {
            // const userData = JSON.parse(user);
            // const token = userData.token;
            // return !this.jwtHelper.isTokenExpired(token);
            return true;
        }
        return false;
    }

    logout() : void {
        sessionStorage.removeItem('user');
    }
}
