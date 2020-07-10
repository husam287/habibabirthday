import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStartComponent } from './video-start.component';

describe('VideoStartComponent', () => {
  let component: VideoStartComponent;
  let fixture: ComponentFixture<VideoStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
