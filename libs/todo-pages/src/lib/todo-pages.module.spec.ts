import { async, TestBed } from '@angular/core/testing';
import { TodoPagesModule } from './todo-pages.module';

describe('TodoPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodoPagesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodoPagesModule).toBeDefined();
  });
});
