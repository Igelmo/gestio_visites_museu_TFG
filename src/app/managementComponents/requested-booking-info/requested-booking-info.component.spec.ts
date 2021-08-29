import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestedBookingInfoComponent} from './requested-booking-info.component';

describe('VisitInfoComponent', () => {
  let component: RequestedBookingInfoComponent;
  let fixture: ComponentFixture<RequestedBookingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestedBookingInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedBookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
