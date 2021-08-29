import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ManagementVisitsPageComponent} from './management-visits-page.component';

describe('ManagementVisitsPageComponent', () => {
  let component: ManagementVisitsPageComponent;
  let fixture: ComponentFixture<ManagementVisitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementVisitsPageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementVisitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
