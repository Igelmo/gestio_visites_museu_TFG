import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestItemComponent } from './booking-request-item.component';

describe('BookingRequestItemComponent', () => {
  let component: BookingRequestItemComponent;
  let fixture: ComponentFixture<BookingRequestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRequestItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
