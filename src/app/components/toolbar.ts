import { Component, Output, EventEmitter, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { DOCUMENT } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AppMenuService } from '../services/app.menu.service';

@Component({
  selector: 'portfolio-toolbar',
  styleUrls: ['./toolbar.scss'],
    template: `
      <md-toolbar color="primary" class="toolbar">
        <div class="al-user-profile">
          <a routerLink="/"><img src="https://avatars1.githubusercontent.com/u/1858504?v=3&s=460"></a>
        </div>
        <button md-icon-button (click)="openMenu.emit()">
          <md-icon>menu</md-icon>
        </button> 
        <span class="hide-on-med-and-down header-menu"  layout="row" layout-align="space-around center">
          <button *ngFor="let link of items" routerLink="{{link.routerLink}}">{{ link.label }}</button> 
        </span>
        <ul id="langs" class="dropdown-content">
          <li><a (click)="toggleLanguage()"><span class="badge">EN</span></a></li>
          <li><a (click)="toggleLanguage()"><span class="badge">FR</span></a></li>
        </ul>
        <a class="btn dropdown-button lang" href="#!" data-activates="langs">{{currentLanguage}}</a>
      </md-toolbar>
    `
})
export class ToolbarComponent {
  private items: any;

  @Output() openMenu = new EventEmitter();

  public currentLanguage: string;
  private html: any = null;


  constructor(@Inject(DOCUMENT) private document: any,
              private translate: TranslateService,
              private as: AppMenuService){

    this.items = this.as.getMenu()

    // Language
    this.translate.addLangs(['en', 'fr']);

    this.currentLanguage = 'en';

    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);

    this.html = this.document.querySelector('html');
    this.setLang('en');
    this.translate.onLangChange.subscribe((data) => {
      this.setLang(data.lang);
    });
  }

  setLang(lang: string) {
    this.html.setAttribute('lang', lang);
  }

  public toggleLanguage() {
    // this._translate.onLangChanged.subscribe(x => this.refreshText());
    if (this.currentLanguage === 'fr') {
      this.translate.use('en');
      this.currentLanguage = 'en';
    } else {
      this.translate.use('fr');
      this.currentLanguage = 'fr';
    }
  }
}
