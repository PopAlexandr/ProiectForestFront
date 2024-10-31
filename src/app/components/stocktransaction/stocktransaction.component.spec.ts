import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockTransactionComponent } from './stocktransaction.component';

describe('StockTransactionComponent', () => {
  let component: StockTransactionComponent; // Specify the type for component
  let fixture: ComponentFixture<StockTransactionComponent>; // Specify the type for fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockTransactionComponent] // Use declarations instead of imports
    }).compileComponents();

    fixture = TestBed.createComponent(StockTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
