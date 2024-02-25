import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
}
