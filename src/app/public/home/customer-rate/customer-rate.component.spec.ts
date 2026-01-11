import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRateComponent } from './customer-rate.component';

describe('CustomerRateComponent', () => {
  let component: CustomerRateComponent;
  let fixture: ComponentFixture<CustomerRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
