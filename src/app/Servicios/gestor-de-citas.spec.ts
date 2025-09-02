import { TestBed } from '@angular/core/testing';

import { GestorDeCitas } from './gestor-de-citas';

describe('GestorDeCitas', () => {
  let service: GestorDeCitas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorDeCitas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
