import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/users.model';
import { map } from 'rxjs/operators';
import { UsersHelpersService } from './users-helpers.service';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  constructor(private http: HttpClient, private helpers: UsersHelpersService) {}

  getUsersJSON(): Observable<IUser[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users', {
        responseType: 'json',
      })
      .pipe(
        map((res) => {
          return this.helpers.formatUsersResponse(res);
        })
      );
  }
}
