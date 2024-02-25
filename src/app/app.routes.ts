import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetilComponent } from './courses/course-detil/course-detil.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Courses/Course/:id', component: CourseDetilComponent },
  { path: '**', component: NotFoundComponent },
];
