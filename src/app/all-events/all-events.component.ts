import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event'
@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  events$: Observable<Event[]>;
  page:number = 1;
  constructor() { }

  ngOnInit(): void {
    this.events$ = JSON.parse(localStorage.getItem('user')).events;
  }

}
