import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetilComponent } from './courses/course-detil/course-detil.component';
import { PopularComponent } from './home/popular/popular.component';

// DEFINE ROUTE
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  {
    path: 'Courses',
    children: [
      { path: 'Course/:id', component: CourseDetilComponent },
      { path: 'Popular', component: PopularComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
