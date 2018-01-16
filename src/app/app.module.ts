import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
// import { SlimScrollModule } from 'ng2-slimscroll';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseProvider } from 'angularfire2/database';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './core/containers/app';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundPageComponent } from './pages/not-found-page';

import { AppMenuService }from './core/services/app.menu.service';

import { routes } from './routes';
import { reducers, metaReducers } from './reducers';
import { schema } from './db';
import { CustomRouterStateSerializer } from './shared/utils';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyC8KEzZnONE8ROjQCcrFIOiCd6PEvPShsU",
  authDomain: "eric-alter.firebaseapp.com",
  databaseURL: "https://eric-alter.firebaseio.com",
  projectId: "eric-alter",
  storageBucket: "eric-alter.appspot.com",
  messagingSenderId: "1087141875668"
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

let imports = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [Http],
  },
  isolate: false
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxErrorsModule,
    ReCaptchaModule,
    BrowserAnimationsModule,
    // SlimScrollModule,
    ChartsModule,
    Ng2SimplePageScrollModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes, { useHash: true }),
    TranslateModule.forRoot(imports),
    CoreModule.forRoot(),

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({}),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),

    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    DBModule.provideDB(schema),
  ],
  declarations: [
    ResumeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundPageComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    WorkComponent
  ],
  providers: [
    AppMenuService,
    AngularFireDatabaseProvider,

    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
