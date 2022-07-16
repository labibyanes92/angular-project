import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBlockComponent } from './shop-block.component';

describe('ShopBlockComponent', () => {
  let component: ShopBlockComponent;
  let fixture: ComponentFixture<ShopBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
