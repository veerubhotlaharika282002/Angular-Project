import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  payment(){
    alert('Your Payment is successful!!!');
    open('/regular');
  }

}
