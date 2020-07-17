import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { button } from './button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

@Input('info') info:button;
@Input('id') id:number;

  constructor(private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.info.id=this.id;
  }

  onClicked(){
    this.info.clicked=true;
  }



}
