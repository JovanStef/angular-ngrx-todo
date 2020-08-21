import { NgForm } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../models/users.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: IUser = {
    id: null,
    username: '',
    name: '',
    email: '',
    address: null,
    phone: null,
    website: '',
    company: null,
  };
  @Output() newUser = new EventEmitter<IUser>();
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.newUser.emit(this.user);
    console.log(form.value);
  }
}
