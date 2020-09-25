import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecountComponent } from './servicecount.component';

describe('ServicecountComponent', () => {
  let component: ServicecountComponent;
  let fixture: ComponentFixture<ServicecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
