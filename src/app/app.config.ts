// src/app/app.config.ts

import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // Correct import
import { routes } from './app.routes';

// Define the app configuration object
export const appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
