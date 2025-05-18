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
  private previousWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const currentWidth = window.innerWidth;
    const wasMobile = this.previousWidth < 600;
    const isMobile = currentWidth < 600;
    
    // Only update if crossing the mobile breakpoint
    if (wasMobile !== isMobile) {
      this.updateMobileState();
    }
    
    this.previousWidth = currentWidth;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMobile$.value && this.sidenav && this.sidenav.opened) {
      const target = event.target as HTMLElement;
      if (!target.closest('.sidenav') && !target.closest('.menu-button')) {
        this.sidenav.close();
      }
    }
  }

  ngOnInit() {
    this.updateMobileState();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateMobileState();
    });
  }

  private updateMobileState() {
    const isMobile = window.innerWidth < 600;
    this.isMobile$.next(isMobile);
    
    if (this.sidenav) {
      if (isMobile) {
        this.sidenav.mode = 'over';
        this.sidenav.disableClose = false;
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.disableClose = true;
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
    translate.addLangs(['en', 'fr']);
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
