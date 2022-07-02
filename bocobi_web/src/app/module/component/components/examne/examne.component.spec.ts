import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamneComponent } from './examne.component';

describe('ExamneComponent', () => {
  let component: ExamneComponent;
  let fixture: ComponentFixture<ExamneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
