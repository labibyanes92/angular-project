import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInstaComponent } from './blog-insta.component';

describe('BlogInstaComponent', () => {
  let component: BlogInstaComponent;
  let fixture: ComponentFixture<BlogInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogInstaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
