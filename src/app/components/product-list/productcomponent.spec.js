import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './productcomponent';

describe('ProductListComponent', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent]
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
