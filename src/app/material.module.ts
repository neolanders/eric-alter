import {NgModule} from '@angular/core';

import {
  MatSlideToggleModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatChipsModule,
  MatButtonModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule
} from '@angular/material';

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
export class CustomMaterialModule {}
