import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormComponent } from './booking-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BookingFormComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
