import { TestBed } from '@angular/core/testing';

import { NgxLightBoxService } from './ngx-light-box.service';

describe('NgxLightBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLightBoxService = TestBed.get(NgxLightBoxService);
    expect(service).toBeTruthy();
  });
});
