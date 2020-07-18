import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.css']
})
export class PhotoCollectionComponent implements OnInit {
  
  //Array of the photos srcs
photos=[
            //habiba photos
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
        //hossam photo
  {src:"assets/photos/habiba/hossambibo1.png"},
  {src:"assets/photos/habiba/hossambibo2.jpg"},
  {src:"assets/photos/habiba/hossambibo3.jpg"},
  {src:"assets/photos/habiba/hossambibo4.jpg"},
  {src:"assets/photos/habiba/hossambibo5.jpg"},
  {src:"assets/photos/habiba/hossambibo6.jpg"},
  {src:"assets/photos/habiba/hossambibo7.png"},
  {src:"assets/photos/habiba/hossambibo8.jpg"},
  {src:"assets/photos/habiba/hossambibo9.jpg"},
  {src:"assets/photos/habiba/hossambibo10.jpeg"},
          //menna photos
  {src:"assets/photos/habiba/menna1.png"},
  {src:"assets/photos/habiba/menna2.jpg"},
  {src:"assets/photos/habiba/menna3.jpg"},
  {src:"assets/photos/habiba/menna4.jpg"},
  {src:"assets/photos/habiba/menna5.jpg"},
  {src:"assets/photos/habiba/menna6.jpg"},
            //Yara photos
  {src:"assets/photos/habiba/yara1.jpg"},
  {src:"assets/photos/habiba/yara2.jpg"},
  {src:"assets/photos/habiba/yara3.jpg"},
  {src:"assets/photos/habiba/yara4.jpg"},
  {src:"assets/photos/habiba/yara5.jpg"},
  {src:"assets/photos/habiba/yara6.jpg"},
  {src:"assets/photos/habiba/yara7.jpg"},
  {src:"assets/photos/habiba/yara8.jpg"},
            //jako Photos
  {src:"assets/photos/habiba/jako1.jpeg"},
  {src:"assets/photos/habiba/jako2.jpeg"},
  {src:"assets/photos/habiba/jako3.jpeg"},
  {src:"assets/photos/habiba/jako4.jpeg"},
  {src:"assets/photos/habiba/jako5.jpeg"},
            //Jean Photos
  {src:"assets/photos/habiba/jean1.jpeg"},
  {src:"assets/photos/habiba/jean2.jpeg"},
  {src:"assets/photos/habiba/jean3.jpeg"},
  {src:"assets/photos/habiba/jean4.jpeg"},
  {src:"assets/photos/habiba/jean5.jpeg"},
  {src:"assets/photos/habiba/jean6.jpeg"},
  {src:"assets/photos/habiba/jean7.jpeg"},
  {src:"assets/photos/habiba/jean8.jpeg"},
  {src:"assets/photos/habiba/jean9.jpeg"},
            //Jean Photos
  {src:"assets/photos/habiba/haidy1.jpg"},
  {src:"assets/photos/habiba/haidy2.jpg"},
  {src:"assets/photos/habiba/haidy3.jpg"},
  {src:"assets/photos/habiba/haidy4.jpg"},
  {src:"assets/photos/habiba/haidy5.jpg"},
           //Radwa Photos
  {src:"assets/photos/habiba/radwa1.jpg"},
  {src:"assets/photos/habiba/radwa2.jpg"},
  {src:"assets/photos/habiba/radwa3.jpg"},
  
  
];
  constructor() { }

  ngOnInit(): void {
    console.log('number of photos : '+this.photos.length)
  }

}
