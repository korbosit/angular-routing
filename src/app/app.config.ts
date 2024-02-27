import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withDebugTracing,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration()],
// };

// ENABLE ROUTER NAVIGATION EVENTS https://angular.io/api/router/provideRouter

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDebugTracing(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideClientHydration(),
  ],
};
