import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return { profile }
  }
}

const profile = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  phone: '+1(111)-111-1111',
  users: [
    {
      id: 1,
      name: 'User One',
      email: 'userone@email.com',
      phone: '+1(111)-111-1111',
    },
    {
      id: 2,
      name: 'User Two',
      email: 'usertwo@email.com',
      phone: '+1(111)-111-1111'
    },{
      id: 3,
      name: 'User Three',
      email: 'userthree@email.com',
      phone: '+1(111)-111-1111'
    },{
      id: 4,
      name: 'User Four',
      email: 'userfour@email.com',
      phone: '+1(111)-111-1111'
    }
  ],
  events: [
    {
      id: 1,
      name: 'Financial Accounting Workshop',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ex asperiores eligendi in eum, qui earum dolores soluta expedita nobis. Doloremque!`,
      date: moment.now(),
      startTime: '4:00 pm',
      endTime: '7:00 pm',
      location: 'Lagos, Nigeria',
    },
    {
      id: 2,
      name: 'Git and Github',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ex asperiores eligendi in eum, qui earum dolores soluta expedita nobis. Doloremque!`,
      date: moment.now(),
      startTime: '2:00 pm',
      endTime: '6:00 pm',
      location: 'Munich, Germany',
    },
    {
      id: 3,
      name: 'Python Django',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ex asperiores eligendi in eum, qui earum dolores soluta expedita nobis. Doloremque!`,
      date: moment.now(),
      startTime: '1:00 pm',
      endTime: '4:00 pm',
      location: 'Texas, USA',
    },
    {
      id: 4,
      name: 'Angular Ngrx',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ex asperiores eligendi in eum, qui earum dolores soluta expedita nobis. Doloremque!`,
      date: moment.now(),
      startTime: '12:00 pm',
      endTime: '3:00 pm',
      location: 'Minisota, USA',
    },
  ]
}
