import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedGuardComponent } from './need-guard.component';

describe('NeedGuardComponent', () => {
  let component: NeedGuardComponent;
  let fixture: ComponentFixture<NeedGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
