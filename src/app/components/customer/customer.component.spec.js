import { TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
