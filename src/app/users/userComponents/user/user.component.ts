import { IUser } from './../../models/users.model';
import { IAdress } from './../../models/adress.model';
import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  private _data = new BehaviorSubject<any>([]);

  @Input()
  setData(value) {
    this._data.next(value);
  }

  getData() {
    return this._data.getValue();
  }

  ngOnInit() {
    this._data.subscribe((x) => {
      console.log(x);
    });
  }

  constructor() {}
}
