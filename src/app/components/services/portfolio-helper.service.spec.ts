import { TestBed } from '@angular/core/testing';

import { PortfolioHelperService } from './portfolio-helper.service';

describe('PortfolioHelperService', () => {
  let service: PortfolioHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
