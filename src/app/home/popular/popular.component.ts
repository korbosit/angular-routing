import { Component, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../../Models/course';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent {
  courseService = inject(CourseService);
  popularCourses: Course[] = [];

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(
      (c) => c.rating >= 4.5
    );
  }
}
