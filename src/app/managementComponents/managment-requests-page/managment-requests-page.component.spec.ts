import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentRequestsPageComponent } from './managment-requests-page.component';

describe('ManagmentRequestsPageComponent', () => {
  let component: ManagmentRequestsPageComponent;
  let fixture: ComponentFixture<ManagmentRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentRequestsPageComponent ]
    })
    .compileComponents();
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
