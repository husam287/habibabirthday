import { Injectable } from '@angular/core';
import { button } from './btns/button/button.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoManagerService {

  private videos=[
    {videoSrc:"assets/videos/hossamVideo.mp4",btn:new button('حوسام', "assets/photos/habiba/hossambibo5.jpg")},
    {videoSrc:"assets/videos/mennaVideo.mp4",btn:new button('بنت مش كويسة', "assets/photos/habiba/mennaLogo.jpeg")},
    {videoSrc:"assets/videos/jeanVideo.mp4",btn:new button('Jean & Mourine', "assets/photos/habiba/jeanLogo.jpeg")},
    {videoSrc:"assets/videos/jakoVideo.mp4",btn:new button('Jako', "assets/photos/habiba/jakologo.jpeg")},
    {videoSrc:"assets/videos/mariamVideo.mp4",btn:new button('مريم', "assets/photos/habiba/mariamlogo.jpeg")},
    {videoSrc:"assets/videos/doaaVideo.mp4",btn:new button('دعاء', "assets/photos/habiba/doaalogo.jpg")},
    {videoSrc:"assets/videos/radwaVideo.mp4",btn:new button('رضوى', "assets/photos/habiba/radwalogo.jpg")},
    {videoSrc:"assets/videos/ehsanVideo.mp4",btn:new button('إحسان', "assets/photos/habiba/ehsanlogo.jpg")},
    {videoSrc:"assets/videos/haidyVideo.mp4",btn:new button('هايدي', "assets/photos/habiba/haidy1.jpg")},
    {videoSrc:"assets/videos/bassmaSalahVideo.mp4",btn:new button('بسمة صلاح', "assets/photos/habiba/bassmaSalahLogo.jpeg")},
    {videoSrc:"assets/videos/bassmaGalalVideo.mp4",btn:new button('بسمة جلال', "assets/photos/habiba/bassmaGalalLogo.jpeg")},
    {videoSrc:"assets/videos/habibaMahmodVideo.mp4",btn:new button('حبيبة محمود', "assets/photos/habiba/habibaMahmodLogo.jpeg")},
    {videoSrc:"assets/videos/ranaVideo.mp4",btn:new button('أبو صلاح', "assets/photos/habiba/ranaLogo.jpeg")},
    
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
