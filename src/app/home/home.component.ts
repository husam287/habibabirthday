import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
phase1Ended=false;
  constructor() { }

  ngOnInit(): void {
  }

  phase1(){
    this.phase1Ended=true;
  }

}
