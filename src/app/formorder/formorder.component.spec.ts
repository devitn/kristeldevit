import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormorderComponent } from './formorder.component';

describe('FormorderComponent', () => {
  let component: FormorderComponent;
  let fixture: ComponentFixture<FormorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
