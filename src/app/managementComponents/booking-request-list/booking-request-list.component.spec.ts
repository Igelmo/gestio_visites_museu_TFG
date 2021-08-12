import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestListComponent } from './booking-request-list.component';

describe('BookingRequestListComponent', () => {
  let component: BookingRequestListComponent;
  let fixture: ComponentFixture<BookingRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
