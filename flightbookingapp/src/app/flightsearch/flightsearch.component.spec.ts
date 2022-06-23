import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsearchComponent } from './flightsearch.component';

describe('FlightsearchComponent', () => {
  let component: FlightsearchComponent;
  let fixture: ComponentFixture<FlightsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
