import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PopularComponent } from './popular/popular.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    PopularComponent,
    TestimonyComponent,
    ServicesComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
