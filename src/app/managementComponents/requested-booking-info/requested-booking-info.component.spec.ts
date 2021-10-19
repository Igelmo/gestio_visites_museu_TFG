import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestedBookingInfoComponent} from './requested-booking-info.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RequestedBookingInfoComponent', () => {
  let component: RequestedBookingInfoComponent;
  let fixture: ComponentFixture<RequestedBookingInfoComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RequestedBookingInfoComponent]
    })
      .compileComponents();
    httpClient = TestBed.inject(HttpClient);
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
