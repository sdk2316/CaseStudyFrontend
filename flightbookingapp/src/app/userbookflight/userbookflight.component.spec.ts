import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookflightComponent } from './userbookflight.component';

describe('UserbookflightComponent', () => {
  let component: UserbookflightComponent;
  let fixture: ComponentFixture<UserbookflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbookflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
