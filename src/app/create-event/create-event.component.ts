import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  errorImage:string;
  constructor(private firebase: AngularFireDatabase, private http: HttpClient) { }

  ngOnInit(): void {
  }

  fileUpload(event){
    const file = event.target.files[0];
    if(file.type && file.type.indexOf('image') === -1){
      this.errorImage = `File is not an image. ${file.type}`;
      return;
    }
    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
      const {apiKey} = environment.firebaseConfig;
      const { databaseURL } = environment.firebaseConfig;
      const image = {
        "url": e.target.result.toString()
      }
      this.http.post(`https://elite-101-dashboard-default-rtdb.firebaseio.com/eventbanners/banners.json`, image)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    })
    reader.readAsDataURL(file);
  }

}
