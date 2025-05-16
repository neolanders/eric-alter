import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'portfolio-nav-item',
  standalone: true,
  imports: [RouterModule, MatListModule, MatIconModule],
  template: `
    <a mat-list-item [routerLink]="routerLink" (click)="activate.emit()">
      <mat-icon mat-list-icon>{{ icon }}</mat-icon>
      <span mat-line><ng-content></ng-content></span>
    </a>
  `,
  styles: [`
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class NavItemComponent {
  @Input() icon: string = '';
  @Input() hint: string = '';
  @Input() routerLink: string | any[] = '/';
  @Output() activate = new EventEmitter();
} 