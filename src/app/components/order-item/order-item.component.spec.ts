import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OrderItemComponent } from './order-item.component';

describe('OrderItemComponent', () => {
  let component: OrderItemComponent; // Specify the component type
  let fixture: ComponentFixture<OrderItemComponent>; // Specify the fixture type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderItemComponent] // Use declarations instead of imports
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
