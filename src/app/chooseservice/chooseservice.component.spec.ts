import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseserviceComponent } from './chooseservice.component';

describe('ChooseserviceComponent', () => {
  let component: ChooseserviceComponent;
  let fixture: ComponentFixture<ChooseserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
