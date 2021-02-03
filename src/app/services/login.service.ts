import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: any;
  constructor() { 
    this.token = localStorage.getItem('token');
  }

  get getToken() {
    return this.token;
  }
}
