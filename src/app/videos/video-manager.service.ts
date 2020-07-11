import { Injectable } from '@angular/core';
import { button } from './btns/button/button.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoManagerService {

  private videos=[
    {videoSrc:"assets/videos/test1.mp4",btn:new button('Test', "assets/photos/habiba/hossambibo5.jpg")},
    {videoSrc:"assets/videos/birthday2018.mp4",btn:new button('Birthday2018', "assets/photos/habiba/bibo3.jpg")},
    {videoSrc:"assets/videos/birthday2019.mp4",btn:new button('Birthday2019', "assets/photos/habiba/bibo11.jpg")},
    
  ];

  played =new Subject<boolean>();

  constructor() { }

  getVideo(id:number){
    return this.videos[id];
  }
  getAllVideos(){
    return this.videos.slice();
  }
}
