import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormorderInstallComponent } from './formorder-install.component';

describe('FormorderInstallComponent', () => {
  let component: FormorderInstallComponent;
  let fixture: ComponentFixture<FormorderInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormorderInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormorderInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
