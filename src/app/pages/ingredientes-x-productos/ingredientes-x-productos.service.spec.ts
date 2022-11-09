import { TestBed } from '@angular/core/testing';

import { IngredientesXProductosService } from './ingredientes-x-productos.service';

describe('IngredientesXProductosService', () => {
  let service: IngredientesXProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientesXProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
