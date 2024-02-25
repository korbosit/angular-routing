import { Component, inject } from '@angular/core';
import { CourseService } from '../../Services/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../../Models/course';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

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
  router: Router = inject(Router);
  // create if you need a relative path
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.popularCourses = this.courseService.courses.filter(
      (c) => c.rating >= 4.5
    );
  }

  navigateToCourses() {
    // by default in these methods the path is absolute
    // this.router.navigate(['Courses'])
    this.router.navigateByUrl('Courses');

    // create if you need a relative path
    // this.router.navigate(['Courses'], { relativeTo: this.activeRoute });
  }
}
