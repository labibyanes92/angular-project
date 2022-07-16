import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshArrivalsComponent } from './fresh-arrivals.component';

describe('FreshArrivalsComponent', () => {
  let component: FreshArrivalsComponent;
  let fixture: ComponentFixture<FreshArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshArrivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
