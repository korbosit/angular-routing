import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { subscribe } from 'node:diagnostics_channel';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];

  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString: string;

  ngOnInit() {
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // console.log(this.searchString);
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');
      if (
        this.searchString === undefined ||
        this.searchString === '' ||
        this.searchString === null
      ) {
        // this.coursesService.getAllcourses().subscribe((data: Course[]) => {
        //   this.AllCourses = data;
        // });
        this.AllCourses = this.activeRoute.snapshot.data['courses'];
      } else {
        this.AllCourses = this.coursesService.courses.filter((x) =>
          x.title.toLowerCase().includes(this.searchString.toLowerCase())
        );
      }
    });
  }
}
