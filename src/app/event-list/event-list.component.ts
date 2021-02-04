import { Component, OnInit } from '@angular/core';
import { Event } from 'app/models/event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }

}
