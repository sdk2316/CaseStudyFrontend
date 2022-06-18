import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllflightlistComponent } from './allflightlist.component';

describe('AllflightlistComponent', () => {
  let component: AllflightlistComponent;
  let fixture: ComponentFixture<AllflightlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllflightlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllflightlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
