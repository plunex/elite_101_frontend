import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {  }
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
      name: 'Jeffry Goodman',
      email: 'jeferygodman@email.com',
      phone: '+1(111)-111-1111',
      image: '../assets/img/faces/face1.png'
    },
    {
      id: 2,
      name: 'George Hutton',
      email: 'georgehutton@email.com',
      phone: '+1(111)-111-1111',
      image: '../assets/img/faces/face2.png'
    },{
      id: 3,
      name: 'Dennis Major',
      email: 'dennismajor@email.com',
      phone: '+1(111)-111-1111',
      image: '../assets/img/faces/face.jpeg'
    },{
      id: 4,
      name: 'David John',
      email: 'davidjohn@email.com',
      phone: '+1(111)-111-1111',
      image: '../assets/img/faces/face2.png'
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
