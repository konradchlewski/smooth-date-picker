import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothDatePickerComponent } from './smooth-date-picker.component';

describe('SmoothDatePickerComponent', () => {
  let component: SmoothDatePickerComponent;
  let fixture: ComponentFixture<SmoothDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
