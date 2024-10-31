import { TestBed } from '@angular/core/testing';
import { OrderItemComponent } from './order-item.component';

describe('OrderItemComponent', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
