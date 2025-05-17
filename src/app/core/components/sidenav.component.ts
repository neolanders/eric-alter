import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { NavItemComponent } from './nav-item.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/" routerLinkActive="active">
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>
      <a mat-list-item routerLink="/skills" routerLinkActive="active">
        <mat-icon>code</mat-icon>
        <span>Skills</span>
      </a>
      <a mat-list-item routerLink="/projects" routerLinkActive="active">
        <mat-icon>work</mat-icon>
        <span>Projects</span>
      </a>
      <a mat-list-item routerLink="/contact" routerLinkActive="active">
        <mat-icon>mail</mat-icon>
        <span>Contact</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    mat-nav-list {
      padding-top: 1rem;
    }

    a {
      display: flex;
      align-items: center;
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }

      mat-icon {
        margin-right: 1rem;
      }
    }
  `]
})
export class SidenavComponent {
  @Output() openMenu = new EventEmitter<void>();
} 