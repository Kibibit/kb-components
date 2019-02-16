import { TestBed } from '@angular/core/testing';

import { KbComponentsService } from './kb-components.service';

describe('KbComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KbComponentsService = TestBed.get(KbComponentsService);
    expect(service).toBeTruthy();
  });
});
