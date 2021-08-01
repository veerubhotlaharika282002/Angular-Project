import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-driverrent',
  templateUrl: './driverrent.component.html',
  styleUrls: ['./driverrent.component.css']
})
export class DriverrentComponent implements OnInit {

  myForm: FormGroup;
  constructor(private auth: AuthService, private router: Router,  private apt: AmazingTimePickerService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      state: '',
      city: '',
      pickup: '',
      drop: '',
      pickupt: '',
      dropt: '',
      firstname: '',
      lastname: '',
      phone: null,
      email: '',
      gender: ''
    }) ;
    }
  // tslint:disable-next-line: typedef
  open(){
    const amazingTimePicker = this.apt.open();
    amazingTimePicker.afterClose().subscribe(time => {
      console.log(time);
    });
  }

  // tslint:disable-next-line: typedef
  Bookings(){
    console.log(this.myForm.value);
    this.auth.booked(this.myForm.value).subscribe(
      res => {
        console.log(res);
        alert('Booking successful');
      },
      err => {console.log(err);
     
      }
    );
   }

}
