import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;  // Specify the type for component
  let fixture: ComponentFixture<CategoryComponent>; // Specify the type for fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent] // Use declarations instead of imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
