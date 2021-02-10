import { Component, OnInit } from '@angular/core';
import { Profile } from 'app/models/profile';
import { Observable } from 'rxjs';
import { LoginService } from './../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile$: Observable<Profile>;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.profile$ = this.loginService.getUser;
  }

}
