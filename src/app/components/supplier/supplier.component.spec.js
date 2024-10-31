import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierComponent } from './supplier.component';

describe('SupplierComponent', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
