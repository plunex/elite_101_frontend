import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  events$: Observable<Event[]>;
  page:number = 1;
  constructor() { }

  ngOnInit(): void {
    this.events$ = JSON.parse(localStorage.getItem('user')).events;
  }

}
