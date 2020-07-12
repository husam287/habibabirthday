import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
@ViewChild('photoSection') photoSection:ElementRef
videosButton:string="لأ عاوزه اعرف";
wentToPhotos=false;
  constructor() { }

  ngOnInit(): void {
  }


  goToPhotos(){
    setTimeout(() => {
      this.videosButton="وريني انتو مين";
      this.wentToPhotos=true;
    }, 1000);
    this.photoSection.nativeElement.scrollIntoView({block:'start',behavior:'smooth'})
    
  }
}
