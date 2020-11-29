import { TestBed } from '@angular/core/testing';

import { SpaceXDataService } from './space-x-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('SpaceXDataService', () => {
  let service: SpaceXDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
       HttpClientModule
      ],
      providers: [HttpClient]
    });
    service = TestBed.inject(SpaceXDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
