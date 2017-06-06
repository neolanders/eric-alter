// import 'hammerjs';

import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';
import { SlimScrollModule } from 'ng2-slimscroll';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseProvider } from 'angularfire2/database';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ComponentsModule } from './components';
import { ProjectEffects } from './effects/project';
import { CollectionEffects } from './effects/collection';
import { ProjectExistsGuard } from './guards/project-exists';

import { AppComponent } from './pages/app';
import { FindProjectPageComponent } from './pages/find-project-page';
import { ViewProjectPageComponent } from './pages/view-project-page';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SelectedProjectPageComponent } from './pages/selected-project-page';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
// import { HomePageComponent } from './pages/home-page';
import { NotFoundPageComponent } from './pages/not-found-page';

import { GoogleBooksService } from './services/google-books';
import { ProjectsService } from './services/projects';
import { AppMenuService }from './services/app.menu.service';

import { routes } from './routes';
import { reducer } from './reducers';
import { schema } from './db';


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
    SlimScrollModule,
    ChartsModule,
    Ng2SimplePageScrollModule.forRoot(),
    MaterialModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes, { useHash: true }),
    TranslateModule.forRoot(imports),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

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
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(ProjectEffects),
    EffectsModule.run(CollectionEffects),

    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    DBModule.provideDB(schema),
  ],
  declarations: [
    AppComponent,
    FindProjectPageComponent,
    ResumeComponent,
    AboutComponent,
    ContactComponent,
    SelectedProjectPageComponent,
    ViewProjectPageComponent,
    // HomePageComponent,
    NotFoundPageComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    WorkComponent
  ],
  providers: [
    ProjectExistsGuard,
    GoogleBooksService,
    ProjectsService,
    AppMenuService,
    AngularFireDatabaseProvider
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
