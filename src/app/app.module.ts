import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// import { AngularFireModule } from '@angular/fire/compat'; // Uncomment and configure if using Firebase
// import { environment } from '../environments/environment'; // Uncomment and configure if using Firebase

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CoreModule } from './core/core.module';

import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundPageComponent } from './pages/not-found-page';

import { AppMenuService } from './core/services/app.menu.service';
import { CustomRouterStateSerializer } from './shared/utils';
import { routes } from './routes';
import { reducers, metaReducers } from './reducers';
import { AppComponent } from './app.component';

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
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase), // Uncomment and configure if using Firebase
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
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
    // AngularFireDatabaseProvider,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }