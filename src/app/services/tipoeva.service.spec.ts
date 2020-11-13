import { TestBed } from '@angular/core/testing';

import { TipoevaService } from './tipoeva.service';

describe('TipoevaService', () => {
  let service: TipoevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
