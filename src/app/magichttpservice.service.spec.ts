/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MagichttpserviceService } from './magichttpservice.service';

describe('MagichttpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagichttpserviceService]
    });
  });

  it('should ...', inject([MagichttpserviceService], (service: MagichttpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
