import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  page:number = 1;
  constructor() { }

  ngOnInit(): void {
    this.users$ = JSON.parse(localStorage.getItem('user')).users;
    console.log(this.users$);
  }

}
