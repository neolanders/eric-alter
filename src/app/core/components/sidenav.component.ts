import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { NavItemComponent } from './nav-item.component';

@Component({
  selector: 'portfolio-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    NavItemComponent
  ],
  template: `
    <mat-nav-list>
      <portfolio-nav-item (activate)="openMenu.emit()" routerLink="/about" icon="create" hint="About">
        About
      </portfolio-nav-item>
      <portfolio-nav-item (activate)="openMenu.emit()" routerLink="/work" icon="book" hint="View my works">
        My Work
      </portfolio-nav-item>
      <portfolio-nav-item (activate)="openMenu.emit()" routerLink="/project/find" icon="search" hint="Find my projects">
        Browse Projects
      </portfolio-nav-item>
      <portfolio-nav-item (activate)="openMenu.emit()" routerLink="/contact" icon="mail" hint="Contact me">
        Contact
      </portfolio-nav-item>
      <portfolio-nav-item (activate)="openMenu.emit()" routerLink="/playground" icon="mode" hint="Playground">
        Playground
      </portfolio-nav-item>
      <portfolio-nav-item (activate)="openMenu.emit()" routerLink="/resume" icon="book" hint="My Resume">
        Resume
      </portfolio-nav-item>
    </mat-nav-list>
  `,
  styles: [`
    mat-sidenav {
      width: 300px;
    }
  `]
})
export class SidenavComponent {
  @Output() openMenu = new EventEmitter();
} 