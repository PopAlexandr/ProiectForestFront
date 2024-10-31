import { TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent] // Use declarations instead of imports
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
