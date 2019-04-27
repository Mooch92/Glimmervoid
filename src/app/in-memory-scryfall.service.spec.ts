import { TestBed } from '@angular/core/testing';

import { InMemoryScryfallService } from './in-memory-scryfall.service';

describe('InMemoryScryfallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryScryfallService = TestBed.get(InMemoryScryfallService);
    expect(service).toBeTruthy();
  });
});
