import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent; // Specify type for component
  let fixture: ComponentFixture<CustomerComponent>; // Specify type for fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerComponent] // Use declarations instead of imports
    })
      .compileComponents(); // Compile components

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance; // Create component instance
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Test if component is created
  });
});
