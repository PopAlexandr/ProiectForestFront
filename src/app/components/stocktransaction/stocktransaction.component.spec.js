import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransactionComponent } from './stocktransaction.component';

describe('StocktransactionComponent', () => {
  let component;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocktransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocktransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
