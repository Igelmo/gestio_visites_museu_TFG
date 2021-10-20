import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentRequestsPageComponent } from './managment-requests-page.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ManagmentRequestsPageComponent', () => {
  let component: ManagmentRequestsPageComponent;
  let fixture: ComponentFixture<ManagmentRequestsPageComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ManagmentRequestsPageComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
