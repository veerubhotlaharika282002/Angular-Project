import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  public userid = '';
  myForm: FormGroup;
  auth2: any;
  constructor(private auth: AuthService , private router: Router , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: '',
      password : '',
    }) ;
    this.googleInitialize();
    }

  // tslint:disable-next-line: typedef
  loginUser(){
    console.log(this.myForm.value);
    if (this.myForm.value.username === '' && this.myForm.value.passowrd === '')
    {
        alert('Please enter username and password');
    }
    else{
    this.auth.loginUser(this.myForm.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token) ;
        this.router.navigate(['/regular']) ;

      },
      err => {console.log(err);
        // tslint:disable-next-line: align
        alert(' You entered wrong UserName or Password ');
      }
    );
   }
  }



  // tslint:disable-next-line: typedef
  googleInitialize() {
    // tslint:disable-next-line: no-string-literal
    window['googleSDKLoaded'] = () => {
      // tslint:disable-next-line: no-string-literal
      window['gapi'].load('auth2', () => {
        // tslint:disable-next-line: no-string-literal
        this.auth2 = window['gapi'].auth2.init({
          client_id: '192836861308-1urdegmvamuje5pabui6r743j78nicuk.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  // tslint:disable-next-line: typedef
  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        // tslint:disable-next-line: prefer-const
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
}

