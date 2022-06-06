import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRuleComponent } from './fire-rule.component';

describe('FireRuleComponent', () => {
  let component: FireRuleComponent;
  let fixture: ComponentFixture<FireRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
