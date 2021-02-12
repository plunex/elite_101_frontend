import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Cropper from 'cropperjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  imageUrl = '';
  errorImage:string;
  constructor(
    private firebase: AngularFireDatabase,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.createEventForm = this.formBuilder.group({
      bannerUrl: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      creationTime: [Date.now()]
    })
  }

  fileUpload(event){
    const file = event.target.files[0];
    if(file.type && file.type.indexOf('image') === -1){
      this.errorImage = `File is not an image. ${file.type}`;
      return;
    }
    // const bannerImage = document.querySelectorAll('img')[1];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target.result.toString();
      this.createEventForm.value.bannerUrl = this.imageUrl;
    }
    reader.readAsDataURL(file);
  }
  
  createEvent(){
    console.log(this.createEventForm.value);
  }

  deleteBanner(){
    this.imageUrl = '';
  }

}
