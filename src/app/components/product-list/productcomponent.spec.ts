import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './productcomponent'; // Adjust the import path if necessary

describe('ProductComponent', () => { // Use the correct name for the component
  let component: ProductComponent; // Specify the component type
  let fixture: ComponentFixture<ProductComponent>; // Specify the fixture type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent] // Use declarations instead of imports
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
