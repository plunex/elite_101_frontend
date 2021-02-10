import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { FormControl, FormBuilder, Form, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]]
    });
  }

  login() {
    console.log('clicking')
    this.loginService.login().subscribe(
      data => {
        window.location.href = '/';
      },
      error => console.log(error)
    )
  }

}
