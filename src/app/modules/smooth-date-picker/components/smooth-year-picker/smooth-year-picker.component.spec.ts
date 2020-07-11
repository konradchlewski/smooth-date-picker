import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothYearPickerComponent } from './smooth-year-picker.component';

describe('SmoothYearPickerComponent', () => {
  let component: SmoothYearPickerComponent;
  let fixture: ComponentFixture<SmoothYearPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothYearPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothYearPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
