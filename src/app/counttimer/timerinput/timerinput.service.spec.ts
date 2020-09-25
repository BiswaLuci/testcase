import { TestBed } from '@angular/core/testing';

import { TimerinputService } from './timerinput.service';

describe('TimerinputService', () => {
  let service: TimerinputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerinputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
