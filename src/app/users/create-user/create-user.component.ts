import { IGeo } from './../models/geo.model';
import { ICompany } from './../models/company.model';
import { IAdress } from './../models/adress.model';
import { NgForm, FormsModule } from '@angular/forms';
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
    image: '',
    username: '',
    name: '',
    email: '',
    address: <IAdress>{
      street: null,
      suite: null,
      city: null,
      zipcode: null,
      geo: <IGeo>{
        lat: null,
        lng: null,
      },
    },
    phone: null,
    website: '',
    company: <ICompany>{
      name: null,
      catchPhrase: null,
      bs: null,
    },
  };
  @Output() newUser = new EventEmitter<IUser>();
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.newUser.emit(this.user);
  }
}
