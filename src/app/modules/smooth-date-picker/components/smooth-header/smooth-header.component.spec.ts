import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothHeaderComponent } from './smooth-header.component';

describe('SmoothHeaderComponent', () => {
  let component: SmoothHeaderComponent;
  let fixture: ComponentFixture<SmoothHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
