import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocaccueilComponent } from './bocaccueil.component';

describe('BocaccueilComponent', () => {
  let component: BocaccueilComponent;
  let fixture: ComponentFixture<BocaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BocaccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BocaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
