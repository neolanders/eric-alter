import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule,
         TranslateService,
         TranslateLoader,
         TranslateStaticLoader } from 'ng2-translate/ng2-translate';

@NgModule({
    imports: [
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        })
    ],
    exports: [
        TranslateModule
    ]
})
export class SharedModule {

    private currentStorageLanguage = 'en';

    constructor(translate: TranslateService) {

        // Language
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang(this.currentStorageLanguage);
        translate.use(this.currentStorageLanguage);
    }
}
