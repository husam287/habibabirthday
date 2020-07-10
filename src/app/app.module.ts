import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { VideosComponent } from './videos/videos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoCollectionComponent } from './birthday/photo-collection/photo-collection.component';
import { BtnsComponent } from './videos/btns/btns.component';
import { ButtonComponent } from './videos/btns/button/button.component';
import { VideoComponent } from './videos/video/video.component';
import { VideoStartComponent } from './videos/video-start/video-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirthdayComponent,
    VideosComponent,
    NavbarComponent,
    PhotoCollectionComponent,
    BtnsComponent,
    ButtonComponent,
    VideoComponent,
    VideoStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
