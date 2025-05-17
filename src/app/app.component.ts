import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BehaviorSubject } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidenavComponent } from './core/components/sidenav.component';
import { FooterComponent } from './core/components/footer.component';
import { LoaderComponent } from './core/components/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    TranslateModule,
    SidenavComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isLoading = false;
  showContent = true;
  isMobile$ = new BehaviorSubject<boolean>(window.innerWidth < 600);
  currentLanguage = 'EN';
  isLanguageDropdownOpen = false;

  items = [
    { label: 'menu.home', routerLink: '/' },
    { label: 'menu.skills', routerLink: '/skills' },
    { label: 'menu.projects', routerLink: '/projects' },
    { label: 'menu.contact', routerLink: '/contact' }
  ];

  constructor(private translate: TranslateService) {
    // Initialize mobile detection
    this.checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', () => this.checkMobile());

    // Initialize translations
    translate.addLangs(['en', 'fr']);
    
    // Get browser language or use default
    const browserLang = translate.getBrowserLang();
    const lang = browserLang?.match(/en|fr/) ? browserLang : 'en';
    translate.use(lang);
    this.currentLanguage = lang.toUpperCase();
  }

  private checkMobile() {
    this.isMobile$.next(window.innerWidth < 600);
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'EN' ? 'fr' : 'en';
    this.translate.use(newLang);
    this.currentLanguage = newLang.toUpperCase();
    this.isLanguageDropdownOpen = false;
  }

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }
}
