import { Component, OnInit, Input } from '@angular/core';
import { VideoManagerService } from '../video-manager.service';


@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.css']
})

export class BtnsComponent implements OnInit {

   btns=[];

  constructor(private videos :VideoManagerService) { }

  ngOnInit(): void {
    const videos=this.videos.getAllVideos();
    
    for(let video of videos){
      this.btns.push(video.btn);
    }
  }

}
