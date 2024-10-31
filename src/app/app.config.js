// src/app/app.config.js

import { provideZoneChangeDetection, provideRouter } from '@angular/core';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
