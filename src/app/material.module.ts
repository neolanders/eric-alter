import {NgModule} from '@angular/core';

import {
  MatSlideToggleModule
} from '@angular/material/slide-toggle';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatRippleModule
} from '@angular/material/core';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import {
  MatNativeDateModule
} from '@angular/material/core';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatChipsModule
} from '@angular/material/chips';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatListModule
} from '@angular/material/list';
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import {
  MatCardModule
} from '@angular/material/card';

// import {PlatformModule} from '@angular/cdk/platform';
// import {ObserversModule} from '@angular/cdk/observers';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    // ObserversModule,
    // PlatformModule
  ]
})
export class MaterialModule {}
