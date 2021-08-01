import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  myForm: FormGroup;
  constructor( private auth: AuthService , private router: Router , private fb: FormBuilder) { }
  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.myForm = this.fb.group({
      username: '',
      password : '',
      email: ''
    });
  }
// tslint:disable-next-line: typedef
registerUser(){
  if (this.myForm.value.username === '' && this.myForm.value.passowrd === '' && this.myForm.value.email === '')
    {
        alert('Please enter username,password and email');
    }
    else{
  this.auth.registerUser(this.myForm.value).subscribe (
   res => {
     console.log(res);
     localStorage.setItem('token', res.token ) ;
   },
   err => {
     console.log(err);
     if (err instanceof HttpErrorResponse){
          if (err.status === 401) {
          }
     }
   }
 );
}
}
}
