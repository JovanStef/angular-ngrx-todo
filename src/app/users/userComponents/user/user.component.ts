import { IUser } from './../../models/users.model';
import { IAdress } from './../../models/adress.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ICompany } from '../../models/company.model';
import { IGeo } from '../../models/geo.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: IUser;

  addressUser: IAdress;
  companyUser: ICompany;
  geoUser: IGeo;

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.addressUser = this.user.address;
      this.companyUser = this.user.company;
      this.geoUser = this.user.address.geo;
    }
  }

  constructor() {}
}
