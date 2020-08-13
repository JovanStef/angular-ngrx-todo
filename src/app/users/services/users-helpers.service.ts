import { Injectable } from '@angular/core';
import { IUser } from '../models/users.model';
import { IAdress } from '../models/adress.model';
import { ICompany } from '../models/company.model';
import { IGeo } from '../models/geo.model';

@Injectable({
  providedIn: 'root',
})
export class UsersHelpersService {
  constructor() {}

  formatGeo(geo): IGeo {
    return {
      ...geo,
    };
  }

  formatAddress(address): IAdress {
    let geo = this.formatGeo(address.geo);

    return {
      ...address,
      geo: geo,
    };
  }

  formatCompany(company): ICompany {
    return {
      ...company,
    };
  }

  formatUser(user): IUser {
    let address = this.formatAddress(user.address);
    let company = this.formatCompany(user.company);

    return {
      ...user,
      address: address,
      company: company,
    };
  }

  formatUsersResponse(res): IUser[] {
    let users = res.map((elem) => {
      return this.formatUser(elem);
    });
    return users;
  }
}
