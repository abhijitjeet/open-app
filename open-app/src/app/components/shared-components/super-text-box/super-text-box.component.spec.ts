import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTextBoxComponent } from './super-text-box.component';

describe('SuperTextBoxComponent', () => {
  let component: SuperTextBoxComponent;
  let fixture: ComponentFixture<SuperTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
