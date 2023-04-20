import { TestBed } from '@angular/core/testing';

import { ServicioCursosService } from './servicio-cursos.service';

describe('ServicioCursosService', () => {
  let service: ServicioCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
