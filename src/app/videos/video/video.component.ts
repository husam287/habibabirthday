import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
  subs1:Subscription;

  gift=false;
  timeToDisplayGift:number=63;


  @ViewChild('video') video:ElementRef;
  @ViewChild('giftDiv') giftDiv:ElementRef;
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

  onPlay(){
    this.videoManager.played.next(true);
  }
  onPause(){
    this.videoManager.played.next(false);

  }
  onChangeTime(){
    if(this.displayedVideoId===0){
      if(this.video.nativeElement.currentTime>=this.timeToDisplayGift && this.video.nativeElement.currentTime<this.timeToDisplayGift+0.25){
        this.gift=true;
        this.video.nativeElement.pause();
        setTimeout(() => {
         // console.log(this.giftDiv.nativeElement)
          this.giftDiv.nativeElement.scrollIntoView({block:'end' ,behavior:'smooth'})
          
        }, 300);

      }
    }
  }



}
