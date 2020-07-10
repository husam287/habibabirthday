import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
@ViewChild('photoSection') photoSection:ElementRef
  constructor() { }

  ngOnInit(): void {
  }


  goToPhotos(){
    
    this.photoSection.nativeElement.scrollIntoView({block:'start',behavior:'smooth'})
    
  }
}
