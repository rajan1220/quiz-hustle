import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineeringQuizComponent } from './software-engineering-quiz.component';

describe('SoftwareEngineeringQuizComponent', () => {
  let component: SoftwareEngineeringQuizComponent;
  let fixture: ComponentFixture<SoftwareEngineeringQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareEngineeringQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareEngineeringQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
