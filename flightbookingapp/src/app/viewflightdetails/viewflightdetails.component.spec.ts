import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewflightdetailsComponent } from './viewflightdetails.component';

describe('ViewflightdetailsComponent', () => {
  let component: ViewflightdetailsComponent;
  let fixture: ComponentFixture<ViewflightdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewflightdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewflightdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
