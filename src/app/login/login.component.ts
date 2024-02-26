import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const logout = this.activeRoute.queryParamMap.subscribe((queries) => {
      Boolean(queries.get('logout'));
    });

    if (logout) {
      this.authService.logout();
      alert('You are now logged out. IsLogged = ' + this.authService.isLogged);
    }
  }

  OnLoginClick() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if (user === undefined) {
      alert('The Login credentials you have entered is not correct');
    } else {
      alert('Welcome ' + user.name + ' You are logged in');
      this.router.navigate(['Courses']);
    }
  }
}
