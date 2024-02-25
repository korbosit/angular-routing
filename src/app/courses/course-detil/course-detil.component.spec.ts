import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetilComponent } from './course-detil.component';

describe('CourseDetilComponent', () => {
  let component: CourseDetilComponent;
  let fixture: ComponentFixture<CourseDetilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
