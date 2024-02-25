import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-detil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-detil.component.html',
  styleUrl: './course-detil.component.scss',
})
export class CourseDetilComponent implements OnInit, OnDestroy {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  // current active route
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit(): void {
    // OLD EXAMPLE
    // this.courseId = this.activeRoute.snapshot.params['id'];
    // console.log(this.courseId);
    // this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    // updated value
    // ----------------------------
    // next couse and prev course button click
    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.courses.find(
    //     (course) => course.id === this.courseId
    //   );
    // });

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseId
      );
    });
  }

  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
