import { TestBed } from '@angular/core/testing';

import { StatesCountriesService } from './states-countries.service';

describe('StatesCountriesService', () => {
  let service: StatesCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
