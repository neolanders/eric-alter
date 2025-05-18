import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { BehaviorSubject } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidenavComponent } from './core/components/sidenav.component';
import { FooterComponent } from './core/components/footer.component';

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
    MatMenuModule,
    TranslateModule,
    SidenavComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isLoading = false;
  showContent = true;
  isMobile$ = new BehaviorSubject<boolean>(window.innerWidth < 600);
  currentLanguage = 'EN';
  isLanguageDropdownOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMobileState();
  }

  ngOnInit() {
    // Initial check for mobile
    this.updateMobileState();
  }

  ngAfterViewInit() {
    // Ensure sidenav state is correct after view initialization
    setTimeout(() => {
      this.updateMobileState();
    });
  }

  private updateMobileState() {
    const isMobile = window.innerWidth < 600;
    this.isMobile$.next(isMobile);

    console.log('__isMobile', isMobile);
    
    if (this.sidenav) {
      if (isMobile) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    }
  }

  toggleSidenav() {
    if (this.sidenav) {
      if (this.isMobile$.value) {
        this.sidenav.mode = 'over';
      } else {
        this.sidenav.mode = 'side';
      }
      this.sidenav.toggle();
    }
  }

  closeSidenav() {
    if (this.isMobile$.value && this.sidenav) {
      this.sidenav.close();
    }
  }

  items = [
    { label: 'menu.home', routerLink: '/' },
    { label: 'menu.skills', routerLink: '/skills' },
    { label: 'menu.projects', routerLink: '/projects' },
    { label: 'menu.contact', routerLink: '/contact' }
  ];

  constructor(private translate: TranslateService) {
    // Initialize translations
    translate.addLangs(['en', 'fr']);
    
    // Get browser language or use default
    const browserLang = translate.getBrowserLang();
    const lang = browserLang?.match(/en|fr/) ? browserLang : 'en';
    translate.use(lang);
    this.currentLanguage = lang.toUpperCase();
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
