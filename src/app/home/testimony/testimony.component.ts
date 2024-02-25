import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.scss',
})
export class TestimonyComponent {
  testimonials: string[] = [
    'Avery Holmes',
    'Craig Ramirez',
    'Landon Stephens',
    'Leah Ward',
  ];
}
