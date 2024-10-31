import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplierComponent } from './supplier.component';

describe('SupplierComponent', () => {
  let component: SupplierComponent; // Specify the type of component
  let fixture: ComponentFixture<SupplierComponent>; // Specify the type of fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierComponent] // Use declarations instead of imports
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
