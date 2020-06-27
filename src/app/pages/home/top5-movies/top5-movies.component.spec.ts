import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5MoviesComponent } from './top5-movies.component';

describe('Top5MoviesComponent', () => {
  let component: Top5MoviesComponent;
  let fixture: ComponentFixture<Top5MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
