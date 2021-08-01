import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverrentComponent } from './driverrent.component';

describe('DriverrentComponent', () => {
  let component: DriverrentComponent;
  let fixture: ComponentFixture<DriverrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
