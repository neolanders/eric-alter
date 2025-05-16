import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './routes';
import { reducers, metaReducers } from './reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideAnimations()
  ]
};
