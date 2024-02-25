import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detil',
  standalone: true,
  imports: [],
  templateUrl: './course-detil.component.html',
  styleUrl: './course-detil.component.scss',
})
export class CourseDetilComponent implements OnInit {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  // current active route
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // OLD EXAMPLE
    // this.courseId = this.activeRoute.snapshot.params['id'];
    // console.log(this.courseId);

    this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    this.selectedCourse = this.courseService.courses.find(
      (course) => course.id === this.courseId
    );
  }
}
