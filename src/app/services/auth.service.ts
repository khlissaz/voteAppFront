import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../modeles/user';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,private myRoute : Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

login(email: string, password: string) {
    console.log(email)
    return this.http.post<any>(`http://localhost:4000/users/login/`, { email, password })
    .pipe(map(user => {
        console.log(user)
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                var decoded = jwt_decode(user.token); 
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.token);
             localStorage.setItem('currentUser', JSON.stringify(decoded.user));
             this.currentUser =jwt_decode(localStorage.getItem('token')).user
                this.currentUserSubject.next(user);
               
            }
console.log(user)
            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.myRoute.navigate(["/login"])
}
}
