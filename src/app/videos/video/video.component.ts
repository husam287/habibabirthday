import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoManagerService } from '../video-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit ,OnDestroy{
  isThereVideo=false;
  displayedVideo:string;
  displayedVideoId:number;
  subs:Subscription;
  constructor(private activeRouter:ActivatedRoute,private videoManager:VideoManagerService) { }

  ngOnInit(): void {
    this.subs=this.activeRouter.params.subscribe(
      (param:Params)=>{

        this.displayedVideoId= +param['id'];

        if(this.displayedVideoId<this.videoManager.getAllVideos().length && this.displayedVideoId>=0){
          this.displayedVideo=this.videoManager.getVideo(this.displayedVideoId).videoSrc;
          this.isThereVideo=true;

        }

      }
    );
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
