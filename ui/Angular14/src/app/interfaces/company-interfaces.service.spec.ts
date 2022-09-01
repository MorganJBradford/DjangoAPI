import { TestBed } from '@angular/core/testing';

import { CompanyInterfacesService } from './company-interfaces.service';

describe('CompanyInterfacesService', () => {
  let service: CompanyInterfacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyInterfacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
