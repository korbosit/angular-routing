import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetilComponent } from './courses/course-detil/course-detil.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanActivate, CanActivateChild } from './auth.guard';
import { AuthguardService } from './Services/authguard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  {
    path: 'Courses',
    canActivateChild: [CanActivateChild],
    children: [
      {
        path: 'Course/:id',
        component: CourseDetilComponent,
      },
      {
        path: 'Popular',
        component: PopularComponent,
      },
      {
        path: 'Checkout',
        component: CheckoutComponent,
      },
    ],
  },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
