import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent; // Specify the type of component
  let fixture: ComponentFixture<OrderComponent>; // Specify the type of fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderComponent] // Use declarations instead of imports
    }).compileComponents();

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
