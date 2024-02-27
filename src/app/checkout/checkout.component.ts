import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  course;

  ngOnInit() {
    this.activeRoute.data.subscribe((data) => {
      this.course = data;
    });
  }
}
