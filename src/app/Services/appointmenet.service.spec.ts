import { TestBed } from '@angular/core/testing';

import { AppointmenetService } from './appointmenet.service';

describe('AppointmenetService', () => {
  let service: AppointmenetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmenetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
