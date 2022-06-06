import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitaionRuleComponent } from './limitaion-rule.component';

describe('LimitaionRuleComponent', () => {
  let component: LimitaionRuleComponent;
  let fixture: ComponentFixture<LimitaionRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitaionRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitaionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
