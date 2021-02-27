import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlobComponent } from './small-blob.component';

describe('SmallBlobComponent', () => {
  let component: SmallBlobComponent;
  let fixture: ComponentFixture<SmallBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBlobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
