import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsearchComponent } from './carsearch.component';

describe('CarsearchComponent', () => {
  let component: CarsearchComponent;
  let fixture: ComponentFixture<CarsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
