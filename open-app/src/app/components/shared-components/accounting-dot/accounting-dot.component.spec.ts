import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingDotComponent } from './accounting-dot.component';

describe('AccountingDotComponent', () => {
  let component: AccountingDotComponent;
  let fixture: ComponentFixture<AccountingDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingDotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
