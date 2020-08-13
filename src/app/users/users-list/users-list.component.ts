import { Component, OnInit } from '@angular/core';
import { UsersHttpService } from '../services/users-http.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UsersHttpService) {}

  ngOnInit(): void {
    this.userService.getUsersJSON().subscribe((data) => {
      console.log(data);
    });
  }
}
