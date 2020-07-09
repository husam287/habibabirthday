import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.css']
})
export class PhotoCollectionComponent implements OnInit {
photos=[
  {src:"assets/photos/habiba/bibo1.png"},
  {src:"assets/photos/habiba/bibo2.png"},
  {src:"assets/photos/habiba/bibo3.jpg"},
  {src:"assets/photos/habiba/bibo4.jpg"},
  {src:"assets/photos/habiba/bibo5.jpg"},
  {src:"assets/photos/habiba/bibo6.jpg"},
  {src:"assets/photos/habiba/bibo7.jpg"},
  {src:"assets/photos/habiba/bibo8.jpg"},
  {src:"assets/photos/habiba/bibo9.jpg"},
  {src:"assets/photos/habiba/bibo10.jpg"},
  {src:"assets/photos/habiba/bibologo.jpg"},
  {src:"assets/photos/habiba/bibo11.jpg"},
  {src:"assets/photos/habiba/bibo12.jpg"},
  {src:"assets/photos/habiba/bibo13.jpg"},
  {src:"assets/photos/habiba/hossambibo1.png"},
  {src:"assets/photos/habiba/hossambibo2.jpg"},
  {src:"assets/photos/habiba/hossambibo3.jpg"},
  {src:"assets/photos/habiba/hossambibo4.jpg"},
  {src:"assets/photos/habiba/hossambibo5.jpg"},
  
];
  constructor() { }

  ngOnInit(): void {
    console.log('number of photos : '+this.photos.length)
  }

}
