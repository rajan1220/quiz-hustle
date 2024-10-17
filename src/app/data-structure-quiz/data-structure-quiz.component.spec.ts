import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructureQuizComponent } from './data-structure-quiz.component';

describe('DataStructureQuizComponent', () => {
  let component: DataStructureQuizComponent;
  let fixture: ComponentFixture<DataStructureQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataStructureQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataStructureQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
