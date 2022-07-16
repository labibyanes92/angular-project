import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSliderComponent } from './recent-slider.component';

describe('RecentSliderComponent', () => {
  let component: RecentSliderComponent;
  let fixture: ComponentFixture<RecentSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
