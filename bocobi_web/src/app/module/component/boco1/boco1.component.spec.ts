import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boco1Component } from './boco1.component';

describe('Boco1Component', () => {
  let component: Boco1Component;
  let fixture: ComponentFixture<Boco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boco1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Boco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
