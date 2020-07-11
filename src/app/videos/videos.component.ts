import { Component, OnInit, OnDestroy } from '@angular/core';
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
  constructor(private videoManager:VideoManagerService) { }

  ngOnInit(): void {
    this.subs=this.videoManager.played.subscribe(
      data=>this.played=data);

  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
