import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  course;

  ngOnInit() {
    // PASS STATIC DATA
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // });
    // PASS DYNAMIC DATA
    // this.course = this.router.getCurrentNavigation().extras.state;
    this.course = history.state;
  }
}
