import { TestBed } from '@angular/core/testing';

import { SourceNameService } from './source-name.service';

describe('SourceNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceNameService = TestBed.get(SourceNameService);
    expect(service).toBeTruthy();
  });
});
