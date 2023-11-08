import { TestBed } from '@angular/core/testing';

import { SVCBlogPostService } from './svc-blog-post.service';

describe('SVCBlogPostService', () => {
  let service: SVCBlogPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVCBlogPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
