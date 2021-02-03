import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('clicking')
    this.loginService.login().subscribe(
      data => {
        this.router.navigate(['/dashboard'])
      }
    )
  }

}
