import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSupportComponent } from './our-support.component';

describe('OurSupportComponent', () => {
  let component: OurSupportComponent;
  let fixture: ComponentFixture<OurSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
