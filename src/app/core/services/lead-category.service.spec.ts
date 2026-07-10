import { TestBed } from '@angular/core/testing';

import { LeadCategoryService } from './lead-category.service';

describe('LeadCategoryService', () => {
  let service: LeadCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
