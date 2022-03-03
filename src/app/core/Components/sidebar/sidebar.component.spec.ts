import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnmiHeaderComponent } from './sidebar.component';

describe('OnmiHeaderComponent', () => {
  let component: OnmiHeaderComponent;
  let fixture: ComponentFixture<OnmiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnmiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnmiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
