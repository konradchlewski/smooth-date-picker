import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothDayPickerComponent } from './smooth-day-picker.component';

describe('SmoothDayPickerComponent', () => {
  let component: SmoothDayPickerComponent;
  let fixture: ComponentFixture<SmoothDayPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothDayPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothDayPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
