import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBlobComponent } from './big-blob.component';

describe('BigBlobComponent', () => {
  let component: BigBlobComponent;
  let fixture: ComponentFixture<BigBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBlobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
