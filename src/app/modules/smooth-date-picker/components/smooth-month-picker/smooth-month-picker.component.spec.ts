import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothMonthPickerComponent } from './smooth-month-picker.component';

describe('SmoothMonthPickerComponent', () => {
  let component: SmoothMonthPickerComponent;
  let fixture: ComponentFixture<SmoothMonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothMonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
