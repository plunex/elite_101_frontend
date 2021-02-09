import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { Profile } from '../models/profile';
const url = 'api/profile/';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: Observable<Profile>;
  private userS: BehaviorSubject<any>;
  constructor(private http: HttpClient) { 
    this.userS = new BehaviorSubject(JSON.parse(localStorage.getItem('user')))
    this.user = this.userS.value;
  }

  get getUser() {
    return this.user;
  }

  login() :Observable<Profile> {
    return this.http.get<Profile>(url);
  };

}
