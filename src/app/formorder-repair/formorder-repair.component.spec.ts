import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormorderRepairComponent } from './formorder-repair.component';

describe('FormorderRepairComponent', () => {
  let component: FormorderRepairComponent;
  let fixture: ComponentFixture<FormorderRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormorderRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormorderRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
