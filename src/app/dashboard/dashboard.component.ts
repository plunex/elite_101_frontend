import { Component, OnInit } from '@angular/core';
import { Profile } from 'app/models/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile$: Observable<Profile>;

  constructor() { }

  ngOnInit(): void {
    this.profile$ = JSON.parse(localStorage.getItem('user'));
  }

}
