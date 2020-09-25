import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingimageComponent } from './floatingimage.component';

describe('FloatingimageComponent', () => {
  let component: FloatingimageComponent;
  let fixture: ComponentFixture<FloatingimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
