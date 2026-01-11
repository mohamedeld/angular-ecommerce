import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOfMonthComponent } from './deals-of-month.component';

describe('DealsOfMonthComponent', () => {
  let component: DealsOfMonthComponent;
  let fixture: ComponentFixture<DealsOfMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealsOfMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealsOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
