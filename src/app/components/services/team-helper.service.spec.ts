import { TestBed } from '@angular/core/testing';

import { TeamHelperService } from './team-helper.service';

describe('TeamHelperService', () => {
  let service: TeamHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
