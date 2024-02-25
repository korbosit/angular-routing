import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  router: Router = inject(Router);
  OnSearchClicked(value: string) {
    // console.log(value);
    this.router.navigate(['/Courses/'], { queryParams: { search: value } });
  }
}
