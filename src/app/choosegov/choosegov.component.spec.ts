import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosegovComponent } from './choosegov.component';

describe('ChoosegovComponent', () => {
  let component: ChoosegovComponent;
  let fixture: ComponentFixture<ChoosegovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosegovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosegovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
