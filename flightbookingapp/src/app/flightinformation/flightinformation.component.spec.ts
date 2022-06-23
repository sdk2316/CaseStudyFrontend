import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightinformationComponent } from './flightinformation.component';

describe('FlightinformationComponent', () => {
  let component: FlightinformationComponent;
  let fixture: ComponentFixture<FlightinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
