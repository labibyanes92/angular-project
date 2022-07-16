import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInstalComponent } from './blog-instal.component';

describe('BlogInstalComponent', () => {
  let component: BlogInstalComponent;
  let fixture: ComponentFixture<BlogInstalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogInstalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInstalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
