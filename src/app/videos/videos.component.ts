import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { VideoManagerService } from './video-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit,OnDestroy {

  subs:Subscription;

  played=false;
  @ViewChild('soundTrack',{static:true}) soundTrack:ElementRef;
  constructor(private videoManager:VideoManagerService) { }

  ngOnInit(): void {
    this.subs=this.videoManager.played.subscribe(
      data=>this.played=data);

      this.soundTrack.nativeElement.volume=0.25;
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
