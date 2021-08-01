import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usersid ;
  // tslint:disable-next-line: typedef
  getToken() {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: member-ordering
  private signinurl = 'http://localhost:3000/api/register' ;
  // tslint:disable-next-line: member-ordering
  private loginurl = 'http://localhost:3000/api/login' ;
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: member-ordering
  private bookurl = 'http://localhost:3000/booking/driverrent';

  constructor(private http: HttpClient ,  private router: Router) { }

   // tslint:disable-next-line: typedef
   registerUser(user) {
     return this.http.post<any>(this.signinurl, user) ;
   }

   // tslint:disable-next-line: typedef
   loginUser(user) {
    this.usersid = user._id ;
     // tslint:disable-next-line: align
     return this.http.post<any>(this.loginurl, user ) ;
   }

   // tslint:disable-next-line: typedef
   loggedIn() {
    return !!localStorage.getItem('token') ;
  }
// tslint:disable-next-line: typedef
etToken() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['../']);
  }
  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: typedef
 // tslint:disable-next-line: typedef
 booked(bookdata) {
  return this.http.post<any>(this.bookurl, bookdata) ;
}
}
