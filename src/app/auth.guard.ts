import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { inject } from '@angular/core';
// FOR CANACTIVATE

export const CanActivate = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/Login']);
    return false;
  }
};