import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpausecounterComponent } from './startpausecounter.component';

describe('StartpausecounterComponent', () => {
  let component: StartpausecounterComponent;
  let fixture: ComponentFixture<StartpausecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartpausecounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpausecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
