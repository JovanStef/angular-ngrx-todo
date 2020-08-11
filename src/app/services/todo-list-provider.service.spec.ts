import { TestBed } from '@angular/core/testing';

import { TodoListProviderService } from './todo-list-provider.service';

describe('TodoListProviderService', () => {
  let service: TodoListProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
