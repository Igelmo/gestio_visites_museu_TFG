import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestItemComponent } from './booking-request-item.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BookingRequestItemComponent', () => {
  let component: BookingRequestItemComponent;
  let fixture: ComponentFixture<BookingRequestItemComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BookingRequestItemComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
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
