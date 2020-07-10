import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './videos/video/video.component';
import { VideoStartComponent } from './videos/video-start/video-start.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'birthday',component:BirthdayComponent},
  {path:'videos',component:VideosComponent,
    children:[
      {path:'',component:VideoStartComponent},
      {path:':id',component:VideoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
