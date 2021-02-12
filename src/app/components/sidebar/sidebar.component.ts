import { Component, OnInit } from '@angular/core';
import { Profile } from 'app/models/profile';
import { LoginService } from 'app/services/login.service';
import { Observable } from 'rxjs';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard/', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/create-event', title: 'Create Event',  icon:'add', class: '' },
    { path: '/events', title: 'Event List',  icon:'event', class: '' },
    { path: '/users', title: 'User List',  icon:'group', class: '' },
    { path: '/toggle-dark', title: 'Toggle Dark Theme',  icon:'invert_colors', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  profile$: Observable<Profile>;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.profile$ = this.loginService.getUser;
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
