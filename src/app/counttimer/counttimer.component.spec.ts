import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounttimerComponent } from './counttimer.component';

describe('CounttimerComponent', () => {
  let component: CounttimerComponent;
  let fixture: ComponentFixture<CounttimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounttimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounttimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
