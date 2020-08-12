import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoviewerComponent } from './videoviewer.component';

describe('VideoviewerComponent', () => {
  let component: VideoviewerComponent;
  let fixture: ComponentFixture<VideoviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
