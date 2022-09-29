import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  hide: boolean = true;
  picker: any;
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      mobile: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
    });
  }

  ngOnInit(): void {}
}
